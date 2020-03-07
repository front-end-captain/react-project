import { hot } from "react-hot-loader/root";
import React from "react";
import { Calendar, Table, Tag, Divider } from "antd";

import { Steps, WingBlank, WhiteSpace } from "antd-mobile";

import { Header } from "@/components/Example";
import { HoverButton } from "@/components/HoverButton";

import { AppWrapper } from "./App.css.js";

import { Button } from "./button";

const Step = Steps.Step;

const steps = [
  {
    title: "Finished",
    description: "This is description",
  },
  {
    title: "In Progress",
    description: "This is description",
  },
  {
    title: "Waiting",
    description: "This is description",
  },
].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

const customIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
    <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
      <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
      <path
        fill="#FFF"
        d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z"
      />
    </g>
  </svg>
);

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const App = () => (
  <AppWrapper>
    Hello World!
    <Header />
    <HoverButton />
    <Button />
    <Calendar />
    <Table columns={columns} dataSource={data} />
    <WingBlank mode={20} className="stepsExample">
      <div className="sub-title">Horizontal small size</div>
      <WhiteSpace />
      <Steps current={1} direction="horizontal" size="small">
        {steps}
      </Steps>
      <div className="sub-title">Horizontal default size</div>
      <WhiteSpace />
      <Steps current={1} direction="horizontal">
        {steps}
      </Steps>
      <div className="sub-title">Horizontal customized icon</div>
      <WhiteSpace />
      <Steps direction="horizontal">
        <Step title="Step 1" icon={customIcon()} />
        <Step status="error" title="Step 2" icon={customIcon()} />
        <Step title="Step 3" icon={customIcon()} />
      </Steps>
    </WingBlank>
  </AppWrapper>
);

export default hot(App);
