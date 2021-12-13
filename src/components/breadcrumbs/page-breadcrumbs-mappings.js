import data from "../../JSON/drawer.json";

export default function pageBreadcrumbsMappings() {
  let mObj = [];
  for (let objElement of data) {
    if (!Array.isArray(objElement.items)) {
      let drawerOption = {};
      drawerOption.name = objElement.path;
      drawerOption.type = objElement.type;
      let breadcrumbs = [];
      let mBreadcrumbsObj = {};
      mBreadcrumbsObj.label = objElement.name;
      mBreadcrumbsObj.isDisabled = false;
      mBreadcrumbsObj.link = objElement.path;
      mBreadcrumbsObj.urlEndPoint = objElement.urlEndPoint;
      mBreadcrumbsObj.fields = objElement.fields;
      mBreadcrumbsObj.apiUrl = objElement.apiUrl;
      mBreadcrumbsObj.addForm = objElement.addForm;
      // mBreadcrumbsObj.screenId = objElement.screenId;
      breadcrumbs.push(mBreadcrumbsObj);
      drawerOption.breadcrumbs = breadcrumbs;
      mObj.push(drawerOption);
    } else {
      for (let item of objElement.items) {
        let breadcrumbs = [];
        let drawerOption = {};
        drawerOption.name = item.path;
        drawerOption.type = item.type;
        let mBreadcrumbsObj = {};
        let mBreadcrumbsObj1 = {};
        mBreadcrumbsObj.label = item.name;
        mBreadcrumbsObj.isDisabled = false;
        mBreadcrumbsObj.link = item.path;
        mBreadcrumbsObj.fields = item.fields;
        mBreadcrumbsObj.apiUrl = item.apiUrl;
        mBreadcrumbsObj.validation = item.validation;
        mBreadcrumbsObj.urlEndPoint = item.urlEndPoint;
        mBreadcrumbsObj.screenId = item.screenId;
        mBreadcrumbsObj1.urlEndPoint = data.urlEndPoint;
        mBreadcrumbsObj1.label = objElement.name;
        mBreadcrumbsObj1.isDisabled = true;
        mBreadcrumbsObj1.addForm = objElement.addForm;
        breadcrumbs.push(mBreadcrumbsObj1);
        breadcrumbs.push(mBreadcrumbsObj);
        drawerOption.breadcrumbs = breadcrumbs;
        mObj.push(drawerOption);
      }
    }
  }
  return mObj;
}
