import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Avatar} from "@mui/material";
import "./View.css";

import Lineuser from "../Line";
import Userpie from "../userpie";
import Geo from "../Geo";
export default function View() {
  const {id} = useParams();
  const [user, setuser] = useState([]);
  const [userline, setuserline] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("rows"));
    const line = JSON.parse(localStorage.getItem("lineChart"));

    const result = items.filter((e) => e.id == id);
    const chart = line.filter((e) => e.id == id);
    setuser(result);
    setuserline(chart[0]);
    // console.log(chart[0]);
  });
  return (
    <div className="canlender-contain">
      <div className="user-row">
        <div className="user-form">
          <div className="pic-ava">
            {" "}
            <Avatar
              alt="Remy Sharp"
              src={user[0] == undefined ? console.log(user) : user[0].img}
              sx={{width: 80, height: 80}}
            />
          </div>
          <div className="fullname">
            <label className="label-name">Id: </label>
            <div className="nameuser">
              {user[0] == undefined ? console.log(user) : user[0].id}
            </div>
          </div>
          <div className="fullname">
            <label className="label-name">Full Name : </label>
            <div className="nameuser">
              {user[0] == undefined ? console.log(user) : user[0].firstName}{" "}
              {user[0] == undefined ? console.log(user) : user[0].lastName}
            </div>
          </div>
          <div className="fullname">
            <label className="label-name">Email : </label>
            <div className="nameuser">
              {user[0] == undefined ? console.log(user) : user[0].email}
            </div>
          </div>
          <div className="fullname">
            <label className="label-name">Age : </label>
            <div className="nameuser">
              {user[0] == undefined ? console.log(user) : user[0].age}
            </div>
          </div>
        </div>
        {/* <div>  </div> */}
        <Lineuser
          x={(userline[0] = undefined ? console.log(userline) : userline)}
        />
      </div>
      <div className="user-row">
        <div className="pie-view">
          <Userpie
            x={(userline[0] = undefined ? console.log(userline) : userline)}
          />
        </div>
        <div className="geo" id="view-geo">
          <Geo />
        </div>
      </div>
    </div>
  );
}
