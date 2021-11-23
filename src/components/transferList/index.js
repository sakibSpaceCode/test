import React from "react";
import Transfer from "react-virtualized-transfer";
import "./styles.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
require("react-virtualized-transfer/lib/css");
export default class TestTransferList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
      targetKeys: [],
      dataSource: [],
    };
    this.getMock = this.getMock.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.getMock();
  }

  getMock() {
    let obj = [];
    this.props?.permission?.data?.data.map((data) => {
      obj.push({ ...data, choose: false });
    });
    const dataSource = obj;
    const targetKeys = [];
    const length = 5000;

    this.setState({
      dataSource,
      selectedKeys: [],
      targetKeys,
    });
  }

  filterOption(inputValue, option) {
    console.log(inputValue, option);
  }

  handleChange(nextTargetKeys, _direction, _moveKeys) {
    console.log(nextTargetKeys, _direction, _moveKeys);
    this.setState({ targetKeys: nextTargetKeys });
  }

  handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
    console.log(sourceSelectedKeys, targetSelectedKeys);
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys],
    });
  }

  render() {
    return (
      <Transfer
        render={(item) => `${item.codename}`}
        dataSource={this.state.dataSource}
        targetKeys={this.state.targetKeys}
        selectedKeys={this.state.selectedKeys}
        onSelectChange={this.handleSelectChange}
        filterOption={this.filterOption}
        onChange={this.handleChange}
        titles={["source", "target"]}
        className={"test"}
        rowHeight={32}
        listStyle={{
          width: "50%",
          height: 300,
        }}
        operations={[<KeyboardArrowRightIcon />, <KeyboardArrowLeftIcon />]}
        showSearch
        notFoundContent={"not found"}
        searchPlaceholder={"Search"}
      />
    );
  }
}
