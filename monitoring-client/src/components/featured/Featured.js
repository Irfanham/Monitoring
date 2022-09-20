import "./featured.css";
import React, { useEffect, useState } from "react";
function Featured() {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const response = await fetch("http://localhost:3001/");
        const data = await response.json();
        setDatas({ data });
      }
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const listItems =
    datas &&
    datas.data.map((dat) => {
      return (
        <>
          <div className="featuredItem">
            <span className="featuredTitle">
              Debit <span className="featuredSub">Unit 01</span>
            </span>

            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.debit}</span>
              <span className="featuredValueRate">m3/s</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              TSS<span className="featuredSub">Unit 01</span>
            </span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.tss}</span>
              <span className="featuredValueRate">mg/L</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              pH<span className="featuredSub">Unit 01</span>
            </span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.ph}</span>
              <span className="featuredValueRate">m/s</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              NO3N<span className="featuredSub">Unit 01</span>
            </span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.no3n}</span>
              <span className="featuredValueRate">mg/L</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              PO4<span className="featuredSub">Unit 01</span>
            </span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.po4}</span>
              <span className="featuredValueRate">mg/L</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">NH3N</span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.nh3n}</span>
              <span className="featuredValueRate">mg/L</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              TDS<span className="featuredSub">Unit 01</span>
            </span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.tds}</span>
              <span className="featuredValueRate">mg/L</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              BOD5<span className="featuredSub">Unit 01</span>
            </span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.bod5}</span>
              <span className="featuredValueRate">mg/L</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              COD<span className="featuredSub">Unit 01</span>
            </span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.cod}</span>
              <span className="featuredValueRate">mg/L</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              Fe<span className="featuredSub">Unit 01</span>
            </span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.fe}</span>
              <span className="featuredValueRate">mg/L</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              Cu<span className="featuredSub">Unit 01</span>
            </span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.cu}</span>
              <span className="featuredValueRate">mg/L</span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              Cr<span className="featuredSub">Unit 01</span>
            </span>
            <div className="featuredValueContainer">
              <span className="featuredValue"> {dat.cr}</span>
              <span className="featuredValueRate">mg/L</span>
            </div>
          </div>
        </>
      );
    });
  return <div className="featured">{listItems}</div>;
}
export default Featured;
