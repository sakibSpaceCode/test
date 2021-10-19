// import React from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TablePagination from '@material-ui/core/TablePagination';
// import { SortableContainer } from 'react-sortable-hoc';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import { createStyles, withStyles } from '@material-ui/core/styles';
// import { Redirect } from 'react-router-dom';
// // import CircularProgress from '@material-ui/core/CircularProgress';
// import Checkbox from '@material-ui/core/Checkbox';
// import EditIcon from '@material-ui/icons/Edit';
// import NotInterestedIcon from '@material-ui/icons/NotInterested';
// import IconButton from '@material-ui/core/IconButton';
// import moment from 'moment';
// import { checkTextSum } from '../add-unit/add-unit-form/unitIdService';
// import specialTestingCheck from '../add-unit/add-unit-form/specialTestingService';
// import CheckBoxTable from './scCheckBox';
// import { MainSortableCell } from './scMainHeader';
// import Loader from '../loader/loaderNew.container';
// import Fade from '@material-ui/core/Fade';
// import CustomTableCell from './scTableCell';
// import { connect } from 'react-redux';
// import { Tooltip } from '@material-ui/core';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// const SortableHead = SortableContainer(({ children }) => {
//     return (
//         <TableHead>
//             <TableRow
//                 style={{
//                     position: 'sticky',
//                     top: 0,
//                     whiteSpace: 'nowrap',
//                     height: 5,
//                     backgroundColor: '#f2f2f2'
//                 }}
//             >
//                 {children}
//             </TableRow>
//         </TableHead>
//     );
// });

// const StyledTableRow = withStyles((theme) =>
//     createStyles({
//         root: {
//             '&:nth-of-type(odd)': {
//                 backgroundColor: theme.palette.secondary.main
//             }
//         }
//     })
// )(TableRow);

// const StyledTPagination = withStyles((theme) =>
//     createStyles({
//         root: {
//             '& .MuiTablePagination-spacer': {
//                 display: 'none'
//             },
//             '& p:nth-last-child(2)': {
//                 marginLeft: 'auto'
//             },
//             color: theme.palette.primary.main,
//             backgroundColor: theme.palette.background.default,
//             '& p:nth-child(2)': {
//                 marginLeft: '-15px'
//             }
//         }
//     })
// )(TablePagination);
// const styles = (theme) => ({
//     myCustomClass: {
//         color: theme.palette.colors.dark
//     }
// });

// class Index extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             rowsPerPage: this.props.rowsPerPage || 10,
//             page: 0,
//             rows: [],
//             columns: [],
//             windowDimensions: this.props.windowDimensions,
//             order: [],
//             check: false,
//             setAll: false
//         };
//     }

//     handleChangePage = (event, newPage) => {
//         this.setState({ page: newPage });
//         if (this.props.tableHandleChange) {
//             this.props.tableHandleChange(newPage, true);
//         }
//     };

//     handleChangeRowsPerPage = (event) => {
//         this.setState({ rowsPerPage: parseInt(event.target.value), page: 0 });
//         if (this.props.tableHandleChange) {
//             this.props.tableHandleChange(parseInt(event.target.value), false);
//         }
//         this.displayLoading();
//     };

//     filterData = () => {
//         this.setState({ rows: this.props.response.data }, () => {
//             if (this.props.selectedSearch) {
//                 if (typeof this.props.selectedSearch === 'string') {
//                     const filterRow = this.state.rows.filter((row) => {
//                         const valuesOfRow = Object.values(row);
//                         let hasNestedObjects = valuesOfRow.map((item) => {
//                             if (typeof item === 'object') {
//                                 return Object.values(item);
//                             } else {
//                                 return item;
//                             }
//                         });
//                         const allValuesInRow = hasNestedObjects.flat();
//                         return allValuesInRow
//                             .toString()
//                             .toLowerCase()
//                             .includes(this.props.selectedSearch.toLowerCase());
//                     });
//                     this.setState({ rows: filterRow });
//                     if (this.props.setResultsCount) {
//                         this.props.setResultsCount(filterRow.length);
//                     }
//                 } else {
//                     let mainFilterRow = this.state.rows;
//                     const multipleSearch = (searchString, dateType, index) => {
//                         mainFilterRow = mainFilterRow.filter((row) => {
//                             if (typeof dateType === 'string') {
//                                 if (index === 0) {
//                                     return new Date(row[dateType]).getTime() > new Date(searchString).getTime();
//                                 } else if (index === 1) {
//                                     return new Date(row[dateType]).getTime() < new Date(searchString).getTime();
//                                 }
//                             } else {
//                                 const valuesOfRow = Object.values(row);

//                                 let hasNestedObjects = valuesOfRow.map((item) => {
//                                     if (typeof item === 'object') {
//                                         return Object.values(item);
//                                     } else {
//                                         return item;
//                                     }
//                                 });

//                                 let reCheck = hasNestedObjects?.flat().map((item) => {
//                                     if (typeof item === 'object') {
//                                         return Object.values(item);
//                                     } else {
//                                         return item;
//                                     }
//                                 });

//                                 const allValuesInRow = reCheck?.flat();

//                                 return allValuesInRow.toString()?.toLowerCase().includes(searchString?.toLowerCase());
//                             }
//                         });

//                         return mainFilterRow;
//                     };
//                     this.props.selectedSearch.forEach((searchString) => {
//                         if (searchString.indexOf('Date') > 0) {
//                             let DateArray = [searchString.split(' ')[2], searchString.split(' ')[4]];
//                             let DateType =
//                                 searchString.split(' ')[0] === 'Collection'
//                                     ? 'createdAt'
//                                     : searchString.split(' ')[0] === 'Expiration'
//                                     ? 'expiry'
//                                     : 'collection';
//                             DateArray.forEach((dates, index) => multipleSearch(dates, DateType, index));
//                         } else {
//                             multipleSearch(searchString);
//                         }
//                     });

//                     this.setState({ rows: mainFilterRow });

//                     if (this.props.setResultsCount) {
//                         this.props.setResultsCount(mainFilterRow.length);
//                     }
//                 }
//             } else {
//                 this.setState({ rows: this.props.response.data });
//             }
//         });
//     };

//     getData() {
//         if (this.props.response && this.props.response.data) {
//             let mColumns = this.props.response?.displayConfigData?.displayConfig || this.props.response.displayConfig;
//             let mOrder = [];

//             if (mColumns === undefined) {
//                 mColumns = [];
//                 let oneRecord = this.props.response.data[0];
//                 for (let key in oneRecord) {
//                     if (key !== '_id' && typeof oneRecord[key] !== 'object') {
//                         if (
//                             key.toString() !== 'is_synced' &&
//                             key.toString() !== 'isDeleted' &&
//                             key.toString() !== 'isActive' &&
//                             key.toString() !== 'isSynced' &&
//                             key.toString() !== '__v'
//                         )
//                             mColumns.push({ text: key.replace(/_/g, ' ').toUpperCase(), valKey: key, align: 'left' });
//                     }
//                 }
//             }
//             for (let i = 0; i < mColumns?.length; i++) {
//                 mOrder.push(i);
//             }
//             this.setState({ rows: this.props.response.data, columns: mColumns, order: mOrder });
//         }
//     }

//     componentDidMount() {
//         this.getData();
//         this.filterData();
//         this.setState({ profileExist: false });
//         setTimeout(() => {
//             this.setState({ profileExist: true });
//         }, 2000);
//     }

//     componentDidUpdate(nextProps) {
//         const { selectedSearch, response } = this.props;
//         if (nextProps.selectedSearch !== selectedSearch) {
//             if (selectedSearch) {
//                 this.filterData();
//             } else {
//                 this.setState({ rows: this.props.response.data });
//             }
//         }
//         if (nextProps.response !== response) {
//             this.getData();
//         }
//     }

//     checkValue = (val) => {
//         return checkTextSum(val);
//     };
//     checkTestingValue = (val) => {
//         return specialTestingCheck(val);
//     };

//     handleCheck = (e) => {
//         this.state.rows.map((row) => (row['check'] = e.target.checked));
//         this.setState({ setAll: e.target.checked });
//     };

//     onReorderEnd = ({ oldIndex, newIndex }) => {
//         const newOrder = this.state.order;
//         const moved = newOrder.splice(oldIndex, 1);
//         newOrder.splice(newIndex, 0, moved[0]);
//         this.setState({ order: newOrder });
//     };

//     keyFine = (key, row) => {
//         let keys = key.split('.');
//         if (keys[0] === 'skuId') {
//             if (keys[2] === 'expiryDate') {
//                 return row[keys[0]][keys[1]][0][keys[2]];
//             }
//             if (keys[2] === 'collectionDate') {
//                 return row[keys[0]][keys[1]][0][keys[2]];
//             }
//             return row[keys[0]]['rfidNumber'];
//         }
//         if (keys[0] === 'clientId') {
//             if (keys[1] === 'name') {
//                 if (row[keys[0]][keys[1]] !== undefined) return row[keys[0]][keys[1]];
//                 else if (row[keys[0]][0] !== undefined && row[keys[0]][0][keys[1]] !== undefined)
//                     return row[keys[0]][0][keys[1]];
//                 else return '-';
//             }
//             if (keys[1] === 'code') {
//                 return row[keys[0]][keys[1]];
//             }
//         }
//         if (keys[0] === 'locationTypeId') {
//             let hasOwnProp = Object.keys(row).some((item) => item === keys[0]);
//             if (hasOwnProp) {
//                 if (keys[1] === 'name') {
//                     if (row[keys[0]][keys[1]] !== undefined) {
//                         return row[keys[0]][keys[1]];
//                     }
//                     if (row[keys[0]][0] !== undefined && row[keys[0]][0][keys[1]] !== undefined)
//                         return row[keys[0]][0][keys[1]];
//                     else return '-';
//                 }
//             }
//         }

//         if (keys[0] === 'locationId') {
//             if (keys[1] === 'name') {
//                 if (row[keys[0]][0] !== undefined && row[keys[0]][0][keys[1]] !== undefined)
//                     return row[keys[0]][0][keys[1]];
//                 else return '-';
//             }
//         }
//         if (keys[0] === 'deviceTypeId') {
//             let hasOwnProp = Object.keys(row).some((item) => item === keys[0]);
//             if (hasOwnProp) {
//                 if (keys[1] === 'name') {
//                     if (row[keys[0]][0] !== undefined && row[keys[0]][0][keys[1]] !== undefined)
//                         return row[keys[0]][0][keys[1]];
//                     else return '-';
//                 }
//             }
//         }

//         if (keys[0] === 'labsId') {
//             return row[keys[0]][0][keys[1]];
//         }

//         if (keys[0] === 'createdBy') {
//             let hasOwnProp = Object.keys(row).some((item) => item === keys[0]);
//             if (hasOwnProp) {
//                 return row[keys[0]][keys[1]]?.toString().toUpperCase();
//             }
//         } else {
//             let hasOwnProp = Object.keys(row).some((item) => item === keys[0]);
//             if (hasOwnProp) {
//                 return row[keys[0]][keys[1]];
//             }
//         }
//     };

//     applySort = (columnName) => {
//         if (this.props.sortOperation) {
//             const { sort, sortOperation } = this.props;

//             if (sort && sort.key === columnName.valKey) {
//                 let order = sort.value === 1 ? -1 : 1;
//                 const newSort = { key: sort.key, value: order };
//                 this.setState({ sort: newSort });
//                 sortOperation(newSort);
//             } else {
//                 const newSort = { key: columnName.valKey, value: 1 };
//                 this.setState({ sort: newSort });
//                 sortOperation(newSort);
//             }
//         } else {
//             const { sort } = this.state;
//             if (sort && sort.key === columnName.valKey) {
//                 let order = sort.value === 1 ? -1 : 1;
//                 const newSort = { key: sort.key, value: order };
//                 this.setState({ sort: newSort });
//                 this.sortTable(newSort);
//             } else {
//                 const newSort = { key: columnName.valKey, value: 1 };
//                 this.setState({ sort: newSort });
//                 this.sortTable(newSort);
//             }
//         }
//         this.displayLoading();
//     };

//     displayLoading = () => {
//         this.setState({ profileExist: false });
//         setTimeout(() => {
//             this.setState({ profileExist: true });
//         }, 1500);
//         this.setState({ page: 0 });
//     };

//     sortTable = (sort) => {
//         let { rows } = this.state;

//         let newRows = [];
//         if (!sort.key.includes('.')) {
//             const key = sort.key;

//             sort.value === 1
//                 ? (newRows = rows.sort((a, b) => this.sortLogic(a[`${key}`], b[`${key}`])))
//                 : (newRows = rows.sort((a, b) => this.sortLogic(a[`${key}`], b[`${key}`])).reverse());
//             this.setState({ rows: newRows });
//         } else if (sort.key.includes('.')) {
//             sort.value === 1
//                 ? (newRows = rows.sort((a, b) => this.sortLogic(this.keyFine(sort.key, a), this.keyFine(sort.key, b))))
//                 : (newRows = rows
//                       .sort((a, b) => this.sortLogic(this.keyFine(sort.key, a), this.keyFine(sort.key, b)))
//                       .reverse());
//             this.setState({ rows: newRows });
//         }
//     };

//     sortLogic = (a, b) => {
//         let fa = a?.toLowerCase(),
//             fb = b?.toLowerCase();

//         if (fa < fb) {
//             return -1;
//         }
//         if (fa > fb) {
//             return 1;
//         }
//         return 0;
//     };

//     state = { redirect: null };

//     render() {
//         let { rows, rowsPerPage, page, sort } = this.state;
//         if (this.state.redirect) return <Redirect to={this.state.redirect} />;

//         return (
//             <>
//                 {
//                     // this.state.profileExist === false ? (
//                     //     <Loader />
//                     // ) :
//                     <Fade in={true}>
//                         <div style={{ flexGrow: 1 }}>
//                             <div style={{ marginTop: 20 }}>
//                                 {this.state.columns?.length > 0 ? (
//                                     <div
//                                         style={{
//                                             overflow: 'auto',
//                                             minWidth: 16,
//                                             minHeight: 16,
//                                             maxHeight: 'calc(55vh)'
//                                         }}
//                                     >
//                                         <Table stickyHeader size="small">
//                                             <SortableHead axis="x" onSortEnd={this.onReorderEnd}>
//                                                 {this.state.order.map((colIdx, i) =>
//                                                     this.state.columns[colIdx].valKey === '#' ? (
//                                                         <CheckBoxTable
//                                                             key={i}
//                                                             name="checkedB"
//                                                             onClick={this.handleCheck}
//                                                         />
//                                                     ) : (
//                                                         <MainSortableCell
//                                                             index={i}
//                                                             onClick={
//                                                                 this.props.noSorting
//                                                                     ? null
//                                                                     : this.state.columns[colIdx].text !== '#' &&
//                                                                       this.state.columns[colIdx].valKey !== '@'
//                                                                     ? () => this.applySort(this.state.columns[colIdx])
//                                                                     : null
//                                                             }
//                                                             sort={sort}
//                                                             colIdx={this.state.columns[colIdx]}
//                                                         />
//                                                     )
//                                                 )}
//                                             </SortableHead>
//                                             <TableBody>
//                                                 <>
//                                                     {(rowsPerPage > 0
//                                                         ? rows.slice(
//                                                               page * rowsPerPage,
//                                                               page * rowsPerPage + rowsPerPage
//                                                           )
//                                                         : rows
//                                                     ).map((row, i) => (
//                                                         <StyledTableRow
//                                                             key={i}
//                                                             style={{
//                                                                 fontSize: 12,
//                                                                 whiteSpace: 'nowrap',
//                                                                 padding: 'none',
//                                                                 color: '#777777',
//                                                                 height: '40px'
//                                                             }}
//                                                         >
//                                                             <>
//                                                                 {this.state.order.map((colIdx) =>
//                                                                     this.state.columns[colIdx].valKey === 'testing' ? (
//                                                                         <CustomTableCell key={colIdx} align="center">
//                                                                             {this.state.profileExist === false ? (
//                                                                                 <Loader />
//                                                                             ) : (
//                                                                                 this.checkTestingValue(
//                                                                                     row.specialtesting
//                                                                                 )
//                                                                             )}
//                                                                         </CustomTableCell>
//                                                                     ) : this.state.columns[colIdx].valKey ===
//                                                                       'check' ? (
//                                                                         <CustomTableCell key={colIdx} align="center">
//                                                                             {this.state.profileExist === false ? (
//                                                                                 <Loader />
//                                                                             ) : (
//                                                                                 this.checkValue(row.donationId)
//                                                                             )}
//                                                                         </CustomTableCell>
//                                                                     ) : this.state.columns[colIdx].valKey === '#' ? (
//                                                                         <CustomTableCell key={colIdx} align="center">
//                                                                             <Checkbox
//                                                                                 style={{ padding: 3, margin: 0 }}
//                                                                                 name="checkedB"
//                                                                                 color="primary"
//                                                                                 checked={row.check}
//                                                                                 onClick={(e) => {
//                                                                                     row['check'] = e.target.checked;
//                                                                                     this.setState({
//                                                                                         setAll: !this.state.setAll
//                                                                                     });
//                                                                                 }}
//                                                                             />
//                                                                         </CustomTableCell>
//                                                                     ) : this.state.columns[colIdx] === 'Check' ? (
//                                                                         <TableCell align="center" key={colIdx}>
//                                                                             {this.state.profileExist === false ? (
//                                                                                 <Loader />
//                                                                             ) : (
//                                                                                 this.checkValue(row.donationId)
//                                                                             )}
//                                                                         </TableCell>
//                                                                     ) : this.state.columns[colIdx].valKey === '@' ? (
//                                                                         <TableCell align={'center'} key={colIdx}>
//                                                                             {this.state.profileExist === false ? (
//                                                                                 <Loader />
//                                                                             ) : (
//                                                                                 <>
//                                                                                     <Tooltip title="View">
//                                                                                         <IconButton
//                                                                                             size="small"
//                                                                                             onClick={() => {
//                                                                                                 this.props.handleVoucher(
//                                                                                                     row
//                                                                                                 );
//                                                                                                 this.props.history.push(
//                                                                                                     `/dashboard/v/${this.props.currentLocation}/${row._id}`
//                                                                                                 );
//                                                                                                 this.props.setRowData(
//                                                                                                     row
//                                                                                                 );
//                                                                                             }}
//                                                                                             style={{
//                                                                                                 marginRight: '5px'
//                                                                                             }}
//                                                                                         >
//                                                                                             <VisibilityIcon
//                                                                                                 style={{
//                                                                                                     opacity: 0.7,
//                                                                                                     fontSize: 16
//                                                                                                 }}
//                                                                                             />
//                                                                                         </IconButton>
//                                                                                     </Tooltip>
//                                                                                     <Tooltip title="Edit">
//                                                                                         <IconButton
//                                                                                             size="small"
//                                                                                             onClick={() => {
//                                                                                                 this.props.handleEditDialog();
//                                                                                                 this.props.setRowData(
//                                                                                                     row
//                                                                                                 );
//                                                                                                 this.props.setInitialData(
//                                                                                                     row
//                                                                                                 );
//                                                                                             }}
//                                                                                             style={{
//                                                                                                 marginRight: '5px'
//                                                                                             }}
//                                                                                         >
//                                                                                             <EditIcon
//                                                                                                 style={{
//                                                                                                     opacity: 0.7,
//                                                                                                     fontSize: 16
//                                                                                                 }}
//                                                                                             />
//                                                                                         </IconButton>
//                                                                                     </Tooltip>
//                                                                                     <Tooltip title="Deactivate">
//                                                                                         <IconButton
//                                                                                             size="small"
//                                                                                             onClick={() => {
//                                                                                                 this.props.setRowData(
//                                                                                                     row
//                                                                                                 );

//                                                                                                 this.props.handleDialog
//                                                                                                     ? this.props.handleDialog()
//                                                                                                     : null;
//                                                                                             }}
//                                                                                         >
//                                                                                             <NotInterestedIcon
//                                                                                                 style={{
//                                                                                                     opacity: 0.7,
//                                                                                                     fontSize: 16
//                                                                                                 }}
//                                                                                             />
//                                                                                         </IconButton>
//                                                                                     </Tooltip>
//                                                                                 </>
//                                                                             )}
//                                                                         </TableCell>
//                                                                     ) : this.state.columns[colIdx].valKey ===
//                                                                           'createdAt' ||
//                                                                       this.state.columns[colIdx].valKey === 'expiry' ||
//                                                                       this.state.columns[colIdx].valKey ===
//                                                                           'collection' ? (
//                                                                         <CustomTableCell align="left" key={colIdx}>
//                                                                             {this.state.profileExist === false ? (
//                                                                                 <Loader />
//                                                                             ) : (
//                                                                                 moment(
//                                                                                     row[
//                                                                                         this.state.columns[colIdx]
//                                                                                             .valKey
//                                                                                     ]
//                                                                                 ).format(
//                                                                                     this.props?.dateFormat
//                                                                                         ? this.props?.dateFormat
//                                                                                         : 'DD-MMM-YYYY HH:mm'
//                                                                                 )
//                                                                             )}
//                                                                         </CustomTableCell>
//                                                                     ) : (
//                                                                         <TableCell
//                                                                             key={colIdx}
//                                                                             align={this.state.columns[colIdx].align}
//                                                                             style={{
//                                                                                 fontSize: 12,
//                                                                                 padding: 'none',
//                                                                                 color: this.state.columns[colIdx].isLink
//                                                                                     ? this.props.theme.palette.primary
//                                                                                           .main
//                                                                                     : this.props.theme.palette.label
//                                                                                           .main,
//                                                                                 fontWeight: this.state.columns[colIdx]
//                                                                                     .isLink
//                                                                                     ? '700'
//                                                                                     : '500',
//                                                                                 cursor:
//                                                                                     this.state.columns[colIdx].isLink &&
//                                                                                     'pointer'
//                                                                             }}
//                                                                             onClick={() => {
//                                                                                 if (this.state.columns[colIdx].isLink) {
//                                                                                     if (
//                                                                                         this.props?.searchKey?.length >
//                                                                                         0
//                                                                                     ) {
//                                                                                         this.props.history.push(
//                                                                                             `/dashboard/assignunit/r/${row['badgeNumber']}`
//                                                                                         );
//                                                                                     } else {
//                                                                                         let index = i;
//                                                                                         if (page > 0) {
//                                                                                             index =
//                                                                                                 index +
//                                                                                                 page * rowsPerPage;
//                                                                                         }
//                                                                                         if (this.props.setValues) {
//                                                                                             this.props.setValues(index);
//                                                                                         }
//                                                                                         if (
//                                                                                             this.props.setEditDetailOpen
//                                                                                         ) {
//                                                                                             this.props.setEditDetailOpen(
//                                                                                                 true
//                                                                                             );

//                                                                                             this.props.setEditdialogHeader(
//                                                                                                 this.state.columns[
//                                                                                                     colIdx
//                                                                                                 ].text
//                                                                                             );
//                                                                                         }
//                                                                                     }
//                                                                                 }
//                                                                                 if (
//                                                                                     this.state.columns[colIdx].isVoucher
//                                                                                 ) {
//                                                                                     this.props.handleVoucher(row);
//                                                                                     this.props.history.push(
//                                                                                         `/dashboard/v/${this.props.currentLocation}`
//                                                                                     );
//                                                                                     this.props.setRowData(row);
//                                                                                 }
//                                                                             }}
//                                                                         >
//                                                                             {this.state.profileExist === false ? (
//                                                                                 <Loader />
//                                                                             ) : this.state.columns[
//                                                                                   colIdx
//                                                                               ].valKey.includes('.') ? (
//                                                                                 this.keyFine(
//                                                                                     this.state.columns[colIdx].valKey,
//                                                                                     row
//                                                                                 )
//                                                                             ) : (this.state.columns[colIdx].valKey ===
//                                                                                   'badgeNumber' ||
//                                                                                   this.state.columns[colIdx].valKey ===
//                                                                                       'name') &&
//                                                                               row[this.state.columns[colIdx].valKey]
//                                                                                   ?.toUpperCase()
//                                                                                   ?.includes(
//                                                                                       this.props.searchKey?.toUpperCase()
//                                                                                   ) ? (
//                                                                                 <>
//                                                                                     <span style={{ color: '#004272' }}>
//                                                                                         {row[
//                                                                                             this.state.columns[colIdx]
//                                                                                                 .valKey
//                                                                                         ].substr(
//                                                                                             0,
//                                                                                             this.props.searchKey?.length
//                                                                                         )}
//                                                                                     </span>
//                                                                                     {row[
//                                                                                         this.state.columns[colIdx]
//                                                                                             .valKey
//                                                                                     ].substr(
//                                                                                         this.props.searchKey?.length
//                                                                                     )}
//                                                                                 </>
//                                                                             ) : (
//                                                                                 row[this.state.columns[colIdx].valKey]
//                                                                             )}
//                                                                         </TableCell>
//                                                                     )
//                                                                 )}
//                                                             </>
//                                                         </StyledTableRow>
//                                                     ))}
//                                                 </>
//                                             </TableBody>
//                                         </Table>
//                                     </div>
//                                 ) : (
//                                     <div
//                                         style={{
//                                             display: 'flex',
//                                             justifyContent: 'center',
//                                             alignItems: 'center',
//                                             height: '500px'
//                                         }}
//                                     >
//                                         <Loader type="table" />
//                                     </div>
//                                 )}
//                             </div>
//                             {rowsPerPage <= rows.length ? (
//                                 <StyledTPagination
//                                     rowsPerPageOptions={[10, 15, 20]}
//                                     component="div"
//                                     count={
//                                         this.props.tableHandleChange
//                                             ? this.props.response?.page?.filterCount
//                                             : rows?.length
//                                     }
//                                     rowsPerPage={rowsPerPage}
//                                     page={page}
//                                     onChangePage={this.handleChangePage}
//                                     onChangeRowsPerPage={this.handleChangeRowsPerPage}
//                                     style={{ marginBottom: 20 }}
//                                 />
//                             ) : null}
//                         </div>
//                     </Fade>
//                 }
//             </>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         dateFormat: state.dateFormat.dateFormat
//     };
// };

// export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Index));
