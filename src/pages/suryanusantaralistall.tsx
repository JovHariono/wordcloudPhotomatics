import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Paragon } from "../type";
import { useRouter } from "next/router";

interface IParagonListProps {}

const ParagonList: React.FunctionComponent<IParagonListProps> = (props) => {
  const [data1, setData1] = useState<Paragon[]>([
    { id: 1, kata: "nyentrik" },
    { id: 2, kata: "Badut" },
    { id: 7, kata: "si kepo" },
    { id: 11, kata: "ratu gosip" },
    { id: 3, kata: "Ompong" },    
    { id: 5, kata: "Bule" },
    { id: 6, kata: "padang" },    
    { id: 8, kata: "Kiting" },
    { id: 9, kata: "Jomblo akut" },
    { id: 10, kata: "ceking" },
    { id: 12, kata: "Ambon" },
    { id: 13, kata: "ucuuuupp" },
    { id: 14, kata: "cebol" },
    { id: 15, kata: "Tompel" },
    { id: 16, kata: "tukang selfie" },
    { id: 18, kata: "penguasa warkop" },
    { id: 19, kata: "seniman dadakan" },
    { id: 20, kata: "tukang bolos" },
    { id: 21, kata: "jago ngilang" },
    { id: 22, kata: "ahli parkir" },
    { id: 23, kata: "spesialis rebahan" },
    { id: 24, kata: "tukang ngerumpi" },
    { id: 25, kata: "kutu malam" },
    { id: 26, kata: "sultan dadakan" },
    { id: 27, kata: "ahli kasur" },
    { id: 28, kata: "bintang lapangan" },
    { id: 29, kata: "tukang makan siang panjang" },
    { id: 30, kata: "pahlawan kesiangan" },
    { id: 31, kata: "anak pasar malam" },
    { id: 32, kata: "pemburu diskon" },
    { id: 33, kata: "jago tipu-tipu" },
    { id: 34, kata: "sobat kantin" },
    { id: 35, kata: "penyanyi kamar mandi" },
    { id: 36, kata: "penikmat drama" },
    { id: 37, kata: "pelari mager" },
    { id: 38, kata: "manusia kalem" },
    { id: 39, kata: "ahli parkir" },
    { id: 40, kata: "juragan online shop" },
  ]);
  const [data2, setData2] = useState<Paragon[]>([
    { id: 1, kata: "jadi pilot" },
    { id: 2, kata: "punya rumah besar" },
    { id: 3, kata: "jadi atlet nasional" },
    { id: 4, kata: "pingin punya mobil sport" },
    { id: 5, kata: "jadi penyanyi terkenal" },
    { id: 6, kata: "punya restoran sendiri" },
    { id: 7, kata: "jadi dokter" },
    { id: 8, kata: "pingin punya kebun binatang" },    
    { id: 10, kata: "jadi guru" },
    { id: 11, kata: "jadi arsitek terkenal" },
    { id: 12, kata: "pingin punya koleksi motor klasik" },
    { id: 13, kata: "punya perpustakaan pribadi" },
    { id: 14, kata: "jadi ilmuwan" },
    { id: 15, kata: "pingin punya apartemen mewah" },
    { id: 16, kata: "punya toko buku" },
    { id: 17, kata: "jadi pelukis terkenal" },
    { id: 18, kata: "pingin punya pulau sendiri" },
    { id: 19, kata: "punya kafe di pegunungan" },
    { id: 20, kata: "jadi pengusaha sukses" },
    { id: 21, kata: "pingin punya koleksi kamera" },
    { id: 22, kata: "punya tempat penangkaran hewan" },
    { id: 23, kata: "jadi pengacara" },
    { id: 24, kata: "pingin punya studio musik" },
    { id: 25, kata: "punya toko pakaian" },
    { id: 26, kata: "jadi aktor" },
    { id: 27, kata: "pingin punya rumah pohon" },
    { id: 28, kata: "punya kebun sayuran organik" },
    { id: 29, kata: "jadi chef terkenal" },
    { id: 30, kata: "pingin punya galeri seni" },
    { id: 31, kata: "punya taman bunga" },
    { id: 32, kata: "jadi desainer fashion" },
    { id: 33, kata: "pingin punya rumah dengan kolam renang" },
    { id: 34, kata: "punya studio fotografi" },
    { id: 35, kata: "jadi motivator" },
    { id: 36, kata: "pingin punya peternakan kuda" },
    { id: 37, kata: "punya tempat camping" },
    { id: 38, kata: "jadi pembuat film" },
    { id: 39, kata: "pingin punya jet pribadi" },
    { id: 40, kata: "punya perusahaan teknologi" },
    { id: 41, kata: "jadi pemahat" },
    { id: 42, kata: "pingin punya rumah di luar negeri" },
    { id: 43, kata: "punya studio rekaman" },
    { id: 44, kata: "jadi editor buku" },
    { id: 45, kata: "pingin punya restoran di tepi laut" },
    { id: 46, kata: "punya koleksi mainan vintage" },
    { id: 47, kata: "jadi penyelam profesional" },
    { id: 48, kata: "pingin punya taman bermain" },
    { id: 49, kata: "punya rumah kaca untuk tanaman" },
    { id: 50, kata: "jadi produser musik" },
    { id: 51, kata: "pingin punya bioskop mini" },
    { id: 52, kata: "punya tempat latihan yoga" },
    { id: 53, kata: "jadi penulis novel" },
    { id: 54, kata: "pingin punya toko kopi" },
    { id: 55, kata: "punya klub malam" },
    { id: 56, kata: "jadi fotografer alam liar" },
    { id: 57, kata: "pingin punya laboratorium sains" },
    { id: 58, kata: "punya koleksi sepatu unik" },
    { id: 59, kata: "jadi pemandu wisata" },
  ]);
  // const [data3, setData3] = useState<Paragon[]>([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);
  const [itemsToShow, setItemsToShow] = useState(15);

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 30); // Increase the limit by 30
  };

  const router = useRouter();

  // useEffect(() => {
  //   if (!isLoaded) {
  //     axios
  //       .get(`https://suryanation.online/api/data1?_sort=id&_order=desc`)
  //       .then((res) => setData1(res.data))
  //       .catch((err) => console.log(err));
  //     axios
  //       .get(`https://suryanation.online/api/data2?_sort=id&_order=desc`)
  //       .then((res) => setData2(res.data))
  //       .catch((err) => console.log(err));
  //     setIsLoaded(true);
  //     setInterval(() => {
  //       axios
  //         .get(`https://suryanation.online/api/data1?_sort=id&_order=desc`)
  //         .then((res) => setData1(res.data))
  //         .catch((err) => console.log(err));
  //       axios
  //         .get(`https://suryanation.online/api/data2?_sort=id&_order=desc`)
  //         .then((res) => setData2(res.data))
  //         .catch((err) => console.log(err));
  //     }, 10000);
  //   }
  // }, []);

  const handleDeleteAll = () => {
    const deleteKataAll = window.confirm("Are you sure want to delete all?");

    if (deleteKataAll) {
      data1.forEach((data) => {
        axios
          .delete(`https://suryanation.online/api/data1/${data.id}`)
          .catch((err) => console.log(err));
      });
      alert("berhasil delete data");
    }
  };

  const handleDeleteAll2 = () => {
    const deleteKataAll = window.confirm("Are you sure want to delete all?");

    if (deleteKataAll) {
      data2.forEach((data) => {
        axios
          .delete(`https://suryanation.online/api/data2/${data.id}`)
          .catch((err) => console.log(err));
      });
      alert("berhasil delete data");
    }
  };

  const handleDelete = (id: any) => {
    const deleteKata = window.confirm("Are you sure want to delete?");

    if (deleteKata) {
      axios
        .delete(`https://suryanation.online/api/data1/${id}`)
        .catch((err) => console.log(err));
    }
  };

  const handleDelete2 = (id: any) => {
    const deleteKata = window.confirm("Are you sure want to delete?");

    if (deleteKata) {
      axios
        .delete(`https://suryanation.online/api/data2/${id}`)
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="container">
        <h1>All List</h1>
        <div className="row">
          <div className="list-holder">
            <h2>Nama Tongkrongan</h2>
            <h3>Total: 157</h3>
            <button onClick={() => handleDeleteAll()}>Delete All Data 1</button>
            <div>
              {data1.slice(0, itemsToShow).map((data) => (
                <div className="data-item" key={String(data.id)}>
                  {data.kata}
                  <button
                    style={{ float: "right" }}
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{ float: "right" }}
                    onClick={() => {
                      router.push({
                        pathname: "/curcoldetail",
                        query: { id: String(data.id) },
                      });
                    }}
                  >
                    Detail
                  </button>
                </div>
              ))}
              {itemsToShow < data1.length && (
                <button onClick={handleShowMore}>Load More</button>
              )}
            </div>
          </div>
          <div className="list-holder">
            <h2>Mimpi Terlupakan</h2>
            <h3>Total: 132</h3>
            <button onClick={() => handleDeleteAll2()}>
              Delete All Data 2
            </button>
            <div>
              {data2.slice(0, itemsToShow).map((data) => (
                <div className="data-item" key={String(data.id)}>
                  {data.kata}
                  <button
                    style={{ float: "right" }}
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{ float: "right" }}
                    onClick={() => {
                      router.push({
                        pathname: "/curcoldetail",
                        query: { id: String(data.id) },
                      });
                    }}
                  >
                    Detail
                  </button>
                </div>
              ))}
              {itemsToShow < data2.length && (
                <button onClick={handleShowMore}>Load More</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParagonList;
