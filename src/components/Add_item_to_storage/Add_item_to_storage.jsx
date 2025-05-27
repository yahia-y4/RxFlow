import React, { useState } from "react";
import "./Add_item_to_storage.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Add_item_to_storage() {
  const [data, setData] = useState({
    name: "",
    co_name: "",
    form: "",
    concent: "",
    titer: "",
    package: "",
    num: 1,
    price: "",
    profit: "",
    code: "",
    class: "",
  });
  return (
    <div className="Add_item_to_storage_div" id="Add_item_to_storage_div">
      <Input
        label_v={" الاسم التجاري"}
        input_v={data.name}
        onChange={(event) => {
          setData({ ...data, name: event.target.value });
        }}
      />

      <Input
        label_v={"اسم الشركة "}
        id_v={"add_co_name_item_input"}
        input_v={data.co_name}
        onChange={(event) => {
          setData({ ...data, co_name: event.target.value });
        }}
      />
      <Input
        label_v={"الشكل الصيدلاني"}
        input_v={data.form}
        onChange={(event) => {
          setData({ ...data, form: event.target.value });
        }}
      />
      <Input
        label_v={"التركيز "}
        input_v={data.concent}
        onChange={(event) => {
          setData({ ...data, concent: event.target.value });
        }}
      />
      <Input
        label_v={"العيار"}
        input_v={data.titer}
        onChange={(event) => {
          setData({ ...data, titer: event.target.value });
        }}
      />
      <Input
        label_v={"العبوة"}
        input_v={data.package}
        onChange={(event) => {
          setData({ ...data, package: event.target.value });
        }}
      />
      <Input
        label_v={"العدد "}
        input_v={data.num}
        onChange={(event) => {
          setData({ ...data, num: event.target.value });
        }}
      />
      <Input
        label_v={"سعر القطعة"}
        input_v={data.price}
        onChange={(event) => {
          setData({ ...data, price: event.target.value });
        }}
      />
      <Input
        label_v={"نسبة الربح %"}
        input_v={data.profit}
        onChange={(event) => {
          setData({ ...data, profit: event.target.value });
        }}
      />
      <Input
        label_v={"الباركود "}
        input_v={data.code}
        onChange={(event) => {
          setData({ ...data, code: event.target.value });
        }}
      />
      <Input
        label_v={"الصنف "}
        input_v={data.class}
        onChange={(event) => {
          setData({ ...data, class: event.target.value });
        }}
      />

      <div className="add_buttons_div">
        <Button
          string={"اضافة"}
          onClick={() => {
            console.log(data);
          }}
        />
        <Button string={"الغاء"} />
        <Button
          string={"محو"}
          onClick={() => {
            setData({
              name: "",
              co_name: "",
              form: "",
              concent: "",
              titer: "",
              package: "",
              num: "",
              price: "",
              profit: "",
              code: "",
              class: "",
            });
          }}
        />
      </div>
    </div>
  );
}
