// Attractions.jsx
import React, { useState } from "react";
import "./Attractions.css";
import { Link } from "react-router-dom";

const DESTINATIONS = [
  {
    name: "Agra",
    count: "789 things to do",
    img: "https://th.bing.com/th/id/ORA4.0620A11940024E10B2E20322FF318A39_09C9F6F3797E2F7A?w=200&h=150&o=5&cb=ucfimg2&dpr=1.3&pid=Alab&ucfimg=1",
  },
  {
    name: "Varanasi",
    count: "441 things to do",
    img: "https://th.bing.com/th/id/OIP.1WxPfYwtBTEtGN3mui0HtQHaFj?w=229&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    name: "Kolkata",
    count: "144 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSznza2SIowhGO9Sm-LX-i7bv9jkJQJy9dzOK-KjJaAk8g1z3zJr-_mDBksCFx-YxdU1II6WmU5cjxymmhaPBLtx9PV75OoPjfih8QcX27JlSjbx1GO8MY2lpZOcfnBQ9zqehxQ=w540-h312-n-k-no",
  },
  {
    name: "Thanjavur",
    count: "28 things to do",
    img: "https://tse1.mm.bing.net/th/id/OIP.BEgYp-etDaL-F6JZ5GcjmgHaJQ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Old Goa",
    count: "198 things to do",
    img: "https://static.toiimg.com/thumb/width-800,height-600,msid-24856599.cms",
  },

  // ---- 25+ MORE ----
  {
    name: "Delhi",
    count: "812 things to do",
    img: "https://tse3.mm.bing.net/th/id/OIP.iWmgsAzqrneFmCM1HgoQMwHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Jaipur",
    count: "522 things to do",
    img: "https://tse2.mm.bing.net/th/id/OIP.vT2nmUonpe5y7aQM922UpwHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Mumbai",
    count: "398 things to do",
    img: "https://th.bing.com/th/id/OIP.cE-Ntw6vOoz3bPY28pPtfwHaDp?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Chennai",
    count: "245 things to do",
    img: "https://th.bing.com/th/id/OIP.L4B052ovwaSuIP8oLvSgsAHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Hyderabad",
    count: "310 things to do",
    img: "https://www.holidify.com/images/cmsuploads/compressed/1280px-The_Charminar_on_a_cloudy_day_20191224180350.jpg",
  },

  {
    name: "Udaipur",
    count: "212 things to do",
    img: "https://www.tripsavvy.com/thmb/saxdtK__W0j14gkQ2tEjjAkEB-Y=/2121x1414/filters:fill(auto,1)/GettyImages-956035876-76efc27d14d24032a3f3d1fcefdc4413.jpg",
  },
  {
    name: "Amritsar",
    count: "156 things to do",
    img: "https://th.bing.com/th/id/OIP.2z3BU9v7F9htHwjvWx4e5AHaEo?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Rishikesh",
    count: "134 things to do",
    img: "https://th.bing.com/th/id/OIP.sELWLXGmv4lvXaUSu0uLOwHaFL?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Haridwar",
    count: "98 things to do",
    img: "https://th.bing.com/th/id/OIP.Ro_idRb36niLXJSlAIdfVwHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Shimla",
    count: "188 things to do",
    img: "https://tse4.mm.bing.net/th/id/OIP.kmQ_7yosoVtUi6UaCGPA4QHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Manali",
    count: "205 things to do",
    img: "https://th.bing.com/th/id/OIP.lU4mJMpegRkyRM_9wQn8IAHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Leh",
    count: "94 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzNTQqOqdlg5paFx6Vjt1iwXOhJFy-9YAbG93R7p-44JYaU3m638MGAT1tFkHfb-a2scxUd5pHOivF8i22Kix6RLw2AehApebdoGXhkUKLP_Q6mClLtL3zNOvRdarfvqzQ5npwn=w540-h312-n-k-no",
  },
  {
    name: "Kochi",
    count: "267 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzUH7UW7fkoZqfVnnaw9Nw1v51QTn9P8Sv0iNVmrMotP00foaiaxr36x5_TLoTDgfxKUzGN7w3EHzwMY0DIe1VEaJkeKLo4TF2DjpOwJ1J1JGmulEN-fNE6HLbdIHWbu_m9afLYSA=w540-h312-n-k-no",
  },
  {
    name: "Mysore",
    count: "131 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyCI2FrZpLzHK2MQ8TkGu3cCuEvS76LqA3mivImpnTt95WIqc2Y3y1vuwTqWQ_Xt05yITkS99Ebz9XvKYTLXfbYplhShcuI11ghxHAdLdkpCHwPFN2bxXQM6BVP3g0Q6qbSu-xEng=w540-h312-n-k-no",
  },
  {
    name: "Bhopal",
    count: "87 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy2vRzXWzP012w7HiTKIkZlc2T05mI9rKSFSzhO32CtThkytFEc1qK4c1l-8xZebTAXDBgE5EjK0lDTpRZ1rDm-Ca8h0IR-Vx2oew8hZTIhvmJS96qZaq-iYBDFHZHVfzT2F5c=w540-h312-n-k-no",
  },
  {
    name: "Indore",
    count: "102 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz_V_aIS6wOt9HS-hbWhlArHbGrXaIl-T2xssNmX84aLjShTynETn47RymC4aD3DuTRy6MJSK51LYNzcd8FXT5MmRoBlO1f4byVl0fdZK7W03f0MYi2E0dqTJA80QVAgiVURO8erzfFBUVj=w540-h312-n-k-no",
  },
  {
    name: "Pune",
    count: "224 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy7lpEIALQ2kndF_q2-rDdU9AZ42o90nrDLIjdRRJAIbQVG1xIzrVTBDCux9iHkCFNPG7T_B4qXLWiJt_QJ6K9zAB27KRv5JHSBlkr0z0nY07o78SW-vQ7aSpBcAL0Ud8eiV4DQ_pZDOEk3=w540-h312-n-k-no",
  },
  {
    name: "Ahmedabad",
    count: "198 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz1x3cwG4wMmfbrCJlRI42ewksU-wtAeSaNVfyySERGuxArb4bGogMnjtSLpd_qlnxNxF8d42Xd9G6dGVe-JZBwS5FmtDmES1RSaf9eiFj_3mNefxAZUokiftjlfOV9bbZtU6ql=w540-h312-n-k-no",
  },
  {
    name: "Surat",
    count: "95 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwDMjrGcf9Cmv-EkEvKbQ9ESXX5PvCfI1_oXFc6ABhB9J7myIDkQ9tlflPgs2SP7CmzioiS30DIbw-1Nx-vpPkNGVbYiIe6WljCqE_R1PElCfjC_3uUL8_urWVXDaY80JHCAu2g=w540-h312-n-k-no",
  },
  {
    name: "Jodhpur",
    count: "176 things to do",
    img: "https://tse4.mm.bing.net/th/id/OIP.FkcidQw1Gwlterp6Q9PD8gHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Agre",
    count: "789 things to do",
    img: "https://th.bing.com/th/id/ORA4.0620A11940024E10B2E20322FF318A39_09C9F6F3797E2F7A?w=200&h=150&o=5&cb=ucfimg2&dpr=1.3&pid=Alab&ucfimg=1",
  },
  {
    name: "Varanasi",
    count: "441 things to do",
    img: "https://th.bing.com/th/id/OIP.1WxPfYwtBTEtGN3mui0HtQHaFj?w=229&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    name: "Kolkata",
    count: "144 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSznza2SIowhGO9Sm-LX-i7bv9jkJQJy9dzOK-KjJaAk8g1z3zJr-_mDBksCFx-YxdU1II6WmU5cjxymmhaPBLtx9PV75OoPjfih8QcX27JlSjbx1GO8MY2lpZOcfnBQ9zqehxQ=w540-h312-n-k-no",
  },
  {
    name: "Thanjavur",
    count: "28 things to do",
    img: "https://tse1.mm.bing.net/th/id/OIP.BEgYp-etDaL-F6JZ5GcjmgHaJQ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Old Goa",
    count: "198 things to do",
    img: "https://static.toiimg.com/thumb/width-800,height-600,msid-24856599.cms",
  },

  // ---- 25+ MORE ----
  {
    name: "Delhi",
    count: "812 things to do",
    img: "https://tse3.mm.bing.net/th/id/OIP.iWmgsAzqrneFmCM1HgoQMwHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Jaipur",
    count: "522 things to do",
    img: "https://tse2.mm.bing.net/th/id/OIP.vT2nmUonpe5y7aQM922UpwHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Mumbai",
    count: "398 things to do",
    img: "https://th.bing.com/th/id/OIP.cE-Ntw6vOoz3bPY28pPtfwHaDp?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Chennai",
    count: "245 things to do",
    img: "https://th.bing.com/th/id/OIP.L4B052ovwaSuIP8oLvSgsAHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Hyderabad",
    count: "310 things to do",
    img: "https://www.holidify.com/images/cmsuploads/compressed/1280px-The_Charminar_on_a_cloudy_day_20191224180350.jpg",
  },
  {
    name: "Udaipur",
    count: "212 things to do",
    img: "https://www.tripsavvy.com/thmb/saxdtK__W0j14gkQ2tEjjAkEB-Y=/2121x1414/filters:fill(auto,1)/GettyImages-956035876-76efc27d14d24032a3f3d1fcefdc4413.jpg",
  },
  {
    name: "Amritsar",
    count: "156 things to do",
    img: "https://th.bing.com/th/id/OIP.2z3BU9v7F9htHwjvWx4e5AHaEo?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Rishikesh",
    count: "134 things to do",
    img: "https://th.bing.com/th/id/OIP.sELWLXGmv4lvXaUSu0uLOwHaFL?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Haridwar",
    count: "98 things to do",
    img: "https://th.bing.com/th/id/OIP.Ro_idRb36niLXJSlAIdfVwHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Shimla",
    count: "188 things to do",
    img: "https://tse4.mm.bing.net/th/id/OIP.kmQ_7yosoVtUi6UaCGPA4QHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Manali",
    count: "205 things to do",
    img: "https://th.bing.com/th/id/OIP.lU4mJMpegRkyRM_9wQn8IAHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Leh",
    count: "94 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzNTQqOqdlg5paFx6Vjt1iwXOhJFy-9YAbG93R7p-44JYaU3m638MGAT1tFkHfb-a2scxUd5pHOivF8i22Kix6RLw2AehApebdoGXhkUKLP_Q6mClLtL3zNOvRdarfvqzQ5npwn=w540-h312-n-k-no",
  },
  {
    name: "Kochi",
    count: "267 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzUH7UW7fkoZqfVnnaw9Nw1v51QTn9P8Sv0iNVmrMotP00foaiaxr36x5_TLoTDgfxKUzGN7w3EHzwMY0DIe1VEaJkeKLo4TF2DjpOwJ1J1JGmulEN-fNE6HLbdIHWbu_m9afLYSA=w540-h312-n-k-no",
  },
  {
    name: "Mysore",
    count: "131 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyCI2FrZpLzHK2MQ8TkGu3cCuEvS76LqA3mivImpnTt95WIqc2Y3y1vuwTqWQ_Xt05yITkS99Ebz9XvKYTLXfbYplhShcuI11ghxHAdLdkpCHwPFN2bxXQM6BVP3g0Q6qbSu-xEng=w540-h312-n-k-no",
  },
  {
    name: "Bhopal",
    count: "87 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy2vRzXWzP012w7HiTKIkZlc2T05mI9rKSFSzhO32CtThkytFEc1qK4c1l-8xZebTAXDBgE5EjK0lDTpRZ1rDm-Ca8h0IR-Vx2oew8hZTIhvmJS96qZaq-iYBDFHZHVfzT2F5c=w540-h312-n-k-no",
  },
  {
    name: "Indore",
    count: "102 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz_V_aIS6wOt9HS-hbWhlArHbGrXaIl-T2xssNmX84aLjShTynETn47RymC4aD3DuTRy6MJSK51LYNzcd8FXT5MmRoBlO1f4byVl0fdZK7W03f0MYi2E0dqTJA80QVAgiVURO8erzfFBUVj=w540-h312-n-k-no",
  },
  {
    name: "Pune",
    count: "224 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy7lpEIALQ2kndF_q2-rDdU9AZ42o90nrDLIjdRRJAIbQVG1xIzrVTBDCux9iHkCFNPG7T_B4qXLWiJt_QJ6K9zAB27KRv5JHSBlkr0z0nY07o78SW-vQ7aSpBcAL0Ud8eiV4DQ_pZDOEk3=w540-h312-n-k-no",
  },
  {
    name: "Ahmedabad",
    count: "198 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz1x3cwG4wMmfbrCJlRI42ewksU-wtAeSaNVfyySERGuxArb4bGogMnjtSLpd_qlnxNxF8d42Xd9G6dGVe-JZBwS5FmtDmES1RSaf9eiFj_3mNefxAZUokiftjlfOV9bbZtU6ql=w540-h312-n-k-no",
  },
  {
    name: "Surat",
    count: "95 things to do",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwDMjrGcf9Cmv-EkEvKbQ9ESXX5PvCfI1_oXFc6ABhB9J7myIDkQ9tlflPgs2SP7CmzioiS30DIbw-1Nx-vpPkNGVbYiIe6WljCqE_R1PElCfjC_3uUL8_urWVXDaY80JHCAu2g=w540-h312-n-k-no",
  },
  {
    name: "Jodhpur",
    count: "176 things to do",
    img: "https://tse4.mm.bing.net/th/id/OIP.FkcidQw1Gwlterp6Q9PD8gHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const Attractions = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="attractions-page">
      {/* HERO */}
      <section className="hero">
        <h1>Attractions, activities and experiences</h1>
        <p>Discover new attractions and experiences to match your interests</p>

        <div className="search-box">
          <input placeholder="Where are you going?" />
          {/* <button onClick={() => setShowCalendar(!showCalendar)}>
            Select dates
          </button>
          <button className="search-btn">Search</button> */}

          <Link to="/explore-india" className="search-btn">
            Search
          </Link>
        </div>

        {showCalendar && (
          <div className="calendar">
            <h4>December 2025</h4>
            <div className="calendar-grid">
              {Array.from({ length: 31 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* DESTINATIONS */}
      <section className="destinations">
        <h2>Nearby destinations</h2>

        <div className="grid">
          {DESTINATIONS.map((d, i) => (
            <div className="card" key={i}>
              <img src={d.img} alt={d.name} />
              <div className="overlay">
                <h3>{d.name}</h3>
                <p>{d.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Attractions;
