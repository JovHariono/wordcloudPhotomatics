import axios from "axios";
import Image from "next/image";
import * as React from "react";
import { useEffect, useState } from "react";
import logoCurcol from "../../public/assets/curcol/logoCurcol.png";
import prohibitedWords from "./components/ForbiddenWords";

interface IFormParagonProps { }

const FormParagon: React.FunctionComponent<IFormParagonProps> = (props) => {
  const [kata, setKata] = useState("");
  const [berhasil, setBerhasil] = useState(false);
  const [holdButton, setHoldbutton] = useState(true);
  const [error, setError] = useState("");

  const containsProhibitedWords = (input: string) => {

    return prohibitedWords.some((word) => {
      const regex = new RegExp(
        word
          .split("")
          .map((char) => `${char}+`)
          .join("\\W*"),
        "i"
      );
      return regex.test(input);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (containsProhibitedWords(kata)) {
      setError("Gaboleh kata kasar yah...");
      return;
    }

    setHoldbutton(false);
        
    try {
      const postData = {
        kata,
      };

      const postResponse = await axios.post(
        "https://suryanation.online/api/data2",
        postData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (postResponse.status === 201) {
        setBerhasil(true);        
        setKata("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setHoldbutton(true);
      }, 1500);

    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      <div className="containerFormParagon2">
        <div className="containerInputFormParagon">
          {/* <Image className="imageNovo" src={logoCurcol} alt="logoNovo"></Image> */}
          <form className="formParagon" onSubmit={handleSubmit}>
            {/* <h1>Whats is the best version of you?</h1> */}

            <div className="inputWrapper">
              <input
                type="text"
                required
                value={kata}
                placeholder="Tulis Mimpimu..."
                onChange={(e) => setKata(e.target.value)}
                maxLength={20}
              />
              {error ? <p>{error}</p> : null}
              {berhasil ? <p>Terima kasih!</p> : null}
              { holdButton ? <button className="submit-button">Submit</button> : <button className="submit-button button-disabled" disabled>Processing..</button>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormParagon;