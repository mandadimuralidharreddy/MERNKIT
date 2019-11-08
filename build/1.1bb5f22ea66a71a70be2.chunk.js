(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./app/Dashboard/Dashboard.js":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};r.get||r.set?Object.defineProperty(e,i,r):e[i]=t[i]}return e.default=t,e}(i("./node_modules/react/index.js")),a=i("./node_modules/react-redux/lib/index.js"),n=i("./node_modules/@material-ui/core/index.js"),s=m(i("./app/components/CatalogueSearch/index.js")),o=m(i("./app/components/CategoriesList/index.js"));i("./app/Dashboard/style.scss");var d,l=m(i("./app/UserContext.js")),p=m(i("./app/ProductCatalogue/Products/Actions.js"));function m(t){return t&&t.__esModule?t:{default:t}}function c(t,e,i,r){d||(d="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=t&&t.defaultProps,n=arguments.length-3;if(e||0===n||(e={children:void 0}),e&&a)for(var s in a)void 0===e[s]&&(e[s]=a[s]);else e||(e=a||{});if(1===n)e.children=r;else if(n>1){for(var o=new Array(n),l=0;l<n;l++)o[l]=arguments[l+3];e.children=o}return{$$typeof:d,type:t,key:void 0===i?null:""+i,ref:null,props:e,_owner:null}}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],r=!0,a=!1,n=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);r=!0);}catch(t){a=!0,n=t}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=c(n.Typography,{component:"h6",className:"content_title"},void 0,"Let's start"),g=c(n.Grid,{item:!0,xs:12},void 0,c(n.Grid,{container:!0,className:"dashboard"},void 0,c(o.default,{})));var h=(0,a.connect)(function(t){var e=t.appReducer.app;return{products:t.appReducer.ProductReducer.products,status:t.appReducer.ProductReducer.status,product:t.appReducer.ProductReducer.product,app:e}},function(t){return{loadProducts:function(){t(p.default.getProducts([]))}}})(function(t){var e=JSON.parse(localStorage.getItem("user"));e.forbidden=!1;var i=f((0,r.useState)(t.preselectedBUData),2),a=i[0],o=i[1];return(0,r.useEffect)(function(){a&&t.loadProducts()},[]),c(n.Grid,{},void 0,c(l.default.Consumer,{},void 0,function(t){t.userData.buSelectionData&&t.userData.buSelectionData.data&&t.userData.buSelectionData.selectedData&&o(t.userData.buSelectionData)}),c(s.default,{title:"search everything",selectInputs:{SelectFiledName:"type",SelectFiledID:"BUgroup",SelectFiledLabel:"Choose Group",data:[{value:"Products",label:"Products"},{value:"Promotions",label:"Promotions"}]},BusinessUnitInputs:{BusinessUnitName:"BusinessUnit",BusinessUnitID:"BusinessUnit",BusinessUnitLabel:"Select Business Unit",options:[{value:"Products",label:"Products"},{value:"Promotions",label:"Promotions"}]},SelectMarketAreaInputs:{SelectMarketAreaName:"SelectMarketArea",SelectMarketAreaID:"SelectMarketArea",SelectMarketAreaLabel:"Select Market Area",options2:[{value:"Products 1",label:"Products 1"},{value:"Promotions 2",label:"Promotions 2"}]},channelPartnerName:e.channelPartnerName}),c(n.Grid,{container:!0,className:"container"},void 0,c(n.Grid,{item:!0,xs:12,className:"main_content"},void 0,u,g)))});e.default=h},"./app/Dashboard/index.js":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.default}});var r,a=(r=i("./app/Dashboard/Dashboard.js"))&&r.__esModule?r:{default:r}},"./app/Dashboard/style.scss":function(t,e,i){var r=i("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/Dashboard/style.scss");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i("./node_modules/style-loader/lib/addStyles.js")(r,a);r.locals&&(t.exports=r.locals)},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/Dashboard/style.scss":function(t,e,i){(t.exports=i("./node_modules/css-loader/lib/css-base.js")(!1)).push([t.i,'@-webkit-keyframes circle{0%{opacity:1}40%{opacity:1}to{width:200%;height:200%;opacity:0}}@keyframes circle{0%{opacity:1}40%{opacity:1}to{width:200%;height:200%;opacity:0}}h1{font-size:26pt;font-weight:200!important}h1,h2{line-height:1.5!important;margin-bottom:20px}h2{font-size:21pt}h3{font-size:18pt;line-height:1.5;color:#275682!important}h4{font-size:16.5pt!important;line-height:1.2!important}h5{font-size:13.5pt;line-height:20px!important;color:#275682!important}h6{font-size:10.5pt}h6,p{font-weight:400}p{font-size:14px;line-height:22px;margin-bottom:15px}body{font-size:10.5pt;font-weight:400;font-family:source-sans-pro,sans-serif!important}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (max-width:576px){.container{max-width:540px;padding-left:20px;padding-right:20px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.no_shadow{box-shadow:none!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important}.whitesmoke_bg{background:#f5f5f5}.white_bg,body{background:#fff!important}.form-control .error_msg{color:red;margin:0;font-size:11px;position:absolute;left:0;bottom:-15px}.text_field [class*=MuiFilledInput-root-]{background:#edf1f4!important}.text_field [class*=MuiFilledInput-root-]:hover{background:#edf1f4}.text_field [class*=MuiFilledInput-input-]{padding:24px 12px 10px}.text_field [class*=MuiInputLabel-filled-]{transform:translate(12px,18px) scale(1)}.text_field [class*=MuiFormHelperText-contained-]{margin:0;font-size:11px;position:absolute;left:0;bottom:-12px}.text_field [class*=MuiFilledInput-underline-]{height:50px}.text_field [class*=MuiFilledInput-underline-] [class*=MuiInputBase-input-]{color:#275682;font-weight:600;line-height:18px}.text_field [class*=MuiFilledInput-underline-] [class*=DateFormatInput-input-]{color:#275682;font-weight:600;height:50px;padding-left:0}.text_field [class*=MuiFilledInput-underline-]:before{border-bottom-color:#275682}.text_field [class*=MuiFilledInput-underline-] [class*=MuiInputAdornment-filled-] [class*=MuiSvgIcon-root-]{font-size:16px}.text_field [class*=MuiFilledInput-underline-] [class*=MuiInputBase-inputMultiline-]{padding:0}.text_field [class*=MuiInputLabel-filled-]{color:rgba(39,86,130,.5);font-weight:300}.text_field [class*=MuiInputLabel-shrink-]{letter-spacing:1.2px;transform:translate(12px,8px) scale(.75)}.text_field [class*=DateFormatInput-formControl-] [class*=MuiInputLabel-shrink-]{letter-spacing:1.2px;transform:translate(12px,18px) scale(1)}.text_field.filled [class*=MuiInputLabel-formControl-]{left:-13px}.text_field.filled [class*=DateFormatInput-formControl-] [class*=MuiInputLabel-shrink-]{letter-spacing:1.2px;transform:translate(12px,8px) scale(.75)}.text_field.filled [class*=MuiFilledInput-root-]{background:none!important}.text_field.filled [class*=MuiFilledInput-root-]:hover{background:none}.text_field.filled [class*=MuiFilledInput-root-] [class*=MuiFilledInput-input-]{padding-left:0;padding-right:0}.text_field [class*=MuiSvgIcon-root-]{color:#275682}.text_field [class*=DateFormatInput-formControl-] [class*=MuiFilledInput-underline-] [class*=MuiInputAdornment-filled-] [class*=MuiSvgIcon-root-]{font-size:22px}.text_field.required [class*=DateFormatInput-formControl-] [class*=MuiFormLabel-filled-]:after{content:"*"}.text_field [class*=MuiTypography-body2-]{color:#275682;font-weight:300;font-size:14px}.text_field [class*=MuiInputAdornment-positionEnd-].pbr{position:absolute;right:15px}.text_field.text_field_multiline [class*=MuiFilledInput-underline-]{height:auto}.text_field.text_field_multiline.filled [class*=MuiFilledInput-root-]{padding-left:0}.checkLabel [class*=MuiTypography-body2-]{color:#275682}.disable-date{pointer-events:none}.file-upload{border:1px solid hsla(0,0%,83%,.5);width:120px;height:120px;display:flow-root;align-items:center;justify-content:center;position:relative;line-height:1.42;color:#275682;cursor:pointer;text-align:center}.file-upload label{text-align:center;width:100%}.file-upload img{display:block;margin:32px auto 8px}#file-upload-input{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;appearance:none;cursor:pointer}.upload_img_placeholder{background:#fff;box-shadow:0 1px 6px rgba(0,0,0,.16);-webkit-box-shadow:0 1px 6px rgba(0,0,0,.16);-moz-box-shadow:0 1px 6px rgba(0,0,0,.16);border:1px solid hsla(0,0%,83%,.5);width:110px;height:110px;display:flex;align-items:center;justify-content:center;position:relative;float:left;margin-right:37px}.upload_img_placeholder .close_icon{position:absolute;right:0;top:0;width:20px;height:20px;padding:0!important;min-width:auto}.btn{border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;box-shadow:none!important;text-decoration:none!important;text-transform:capitalize!important;font-size:10.5pt!important;line-height:1!important;padding-top:12px!important;padding-bottom:12px!important}@media screen and (max-width:599px){.btn.mobile_full{min-width:auto;width:100%}}.btn.large{min-width:150px}@media screen and (max-width:599px){.btn.large{min-width:130px}}.btn.medium{min-width:130px}.btn.square{padding:8px!important;min-width:auto;background:#646464}.btn.i-rgt img{margin-left:8px}.mob-center{display:flex;align-items:center;justify-content:space-between;max-width:300px;width:100%;margin-left:auto;margin-right:auto}.pb-0{padding-bottom:0!important}.pb-30{padding-bottom:30px}.pt-30{padding-top:30px}.m-0{margin:0!important}.mt-20{margin-top:20px!important}.mb-30{margin-bottom:30px}.mt-30{margin-top:30px}.ml-30{margin-left:30px!important}@media screen and (max-width:599px){.ml-30{margin-left:10px!important}}.mr-30{margin-right:30px!important}@media screen and (max-width:599px){.mr-30{margin-right:10px!important}}.ml-10{margin-left:10px!important}.smallBtn{min-width:inherit;padding:6px!important}.content_title{color:rgba(39,86,130,.5)!important;margin-bottom:19px!important;letter-spacing:1.2px;text-transform:uppercase}.content_title.small{font-size:9.75pt;text-transform:none}.icon_medium{font-size:14px!important}@media (max-width:599px){.mob_btn_fixed{display:block!important;position:fixed;left:0;bottom:0;z-index:999999;background:#fff;padding:6px;width:100%;text-align:center}.mob_btn_align .btn{margin:5px!important;min-width:calc(50% - 10px)}.btn_main_mob{width:100%}.btn_main_mob .edit_cancel{display:none}}.back_nav{cursor:pointer}a{text-decoration:none}ul{list-style:none;margin:0;padding:0}.form-control{position:relative}.form-control .required{position:absolute;color:red;font-size:11px;left:0;line-height:12px;bottom:-55px;min-height:60px}.form-control .required.keyrequired{bottom:-60px}.select-field,.text-field{background:#edf1f4;width:100%;margin-bottom:6px!important}.select-field svg,.text-field svg{font-size:1.5rem}.select-field label,.text-field label{color:rgba(39,86,130,.5)!important;font-weight:300;font-size:9.75pt;line-height:18px;transform:translate(12px,13px) scale(1);z-index:1}.select-field label+div,.text-field label+div{margin:0;width:100%;background:#edf1f4}.select-field label+div:hover,.text-field label+div:hover{background:#edf1f4}.select-field label+div:before,.text-field label+div:before{border-bottom-color:#275682}.select-field label+div>input,.text-field label+div>input{padding:18px 12px 11px;color:#275682;font-weight:600;line-height:18px;font-size:9.75pt}.select-field label+div>div,.text-field label+div>div{font-weight:600;line-height:18px}.select-field label+div>div [aria-label="Toggle password visibility"] svg,.text-field label+div>div [aria-label="Toggle password visibility"] svg{font-size:1.2rem}.select-field label+div>div>div,.text-field label+div>div>div{padding:18px 12px 8.5px}.select-field label+div>div>div:focus,.text-field label+div>div>div:focus{background:none}.select-field [data-shrink=true],.text-field [data-shrink=true]{transform:translate(12px,5px) scale(.75)!important}.select-field path,.text-field path{color:#275682}.select-field.filled,.text-field.filled{background:transparent}.select-field.filled label,.text-field.filled label{font-size:8.25pt}.select-field.filled .multiSelect>div>div,.text-field.filled .multiSelect>div>div{padding-top:15px;padding-bottom:2px}.select-field.filled [data-shrink=true],.text-field.filled [data-shrink=true]{left:-13px;transform:translate(12px,2px) scale(.75)!important}.select-field.filled [data-shrink=true]+div,.text-field.filled [data-shrink=true]+div{background:none;padding-left:0}.select-field.filled [data-shrink=true]+div>div,.select-field.filled [data-shrink=true]+div>input,.text-field.filled [data-shrink=true]+div>div,.text-field.filled [data-shrink=true]+div>input{color:#275682;padding-left:0;font-size:9.75pt}@media (max-width:599px){.select-field.filled [data-shrink=true]+div>div,.select-field.filled [data-shrink=true]+div>input,.text-field.filled [data-shrink=true]+div>div,.text-field.filled [data-shrink=true]+div>input{padding-right:0;margin-left:0}}.select-field.filled [data-shrink=true]+div>div p,.select-field.filled [data-shrink=true]+div>div path,.select-field.filled [data-shrink=true]+div>input p,.select-field.filled [data-shrink=true]+div>input path,.text-field.filled [data-shrink=true]+div>div p,.text-field.filled [data-shrink=true]+div>div path,.text-field.filled [data-shrink=true]+div>input p,.text-field.filled [data-shrink=true]+div>input path{color:#275682}.select-field.filled [data-shrink=true]+div>div>div,.select-field.filled [data-shrink=true]+div>input>div,.text-field.filled [data-shrink=true]+div>div>div,.text-field.filled [data-shrink=true]+div>input>div{padding-left:0}.startadornment_start{margin-top:8px!important}.header-widget{color:#275682;margin-bottom:0!important}.header-widget h1{font-size:19.5pt!important;margin-bottom:20px!important}.header-widget h1,.header-widget h2{margin-bottom:10px}.header-widget h1:before,.header-widget h2:before{border-top:2px solid #cacaca;width:30px;content:"";display:block;margin-bottom:15px}.header-widget h1.sign_head_noBorder,.header-widget h2.sign_head_noBorder{line-height:1.1!important;padding-top:15px;margin-bottom:50px!important}@media (max-width:599px){.header-widget h1.sign_head_noBorder,.header-widget h2.sign_head_noBorder{padding-top:0}}.header-widget h1.sign_head_noBorder:before,.header-widget h2.sign_head_noBorder:before{display:none}.header-widget h1 b,.header-widget h2 b{font-weight:700}.header-widget p{margin:0}.header-widget.steps{margin-bottom:0!important}.header-widget.steps span{font-size:9pt;opacity:.5;margin-bottom:12px}.header-widget.steps p{color:rgba(39,86,130,.5)}.custom_switch{margin-left:0!important}.custom_switch span:last-child{color:rgba(39,86,130,.5)}.bottom_sign{max-width:540px;width:100%}@media (max-width:599px){.bottom_sign{padding-bottom:20px}}.bottom_sign p{padding-bottom:10px;margin:0}.bottom_sign h6,.bottom_sign p{font-size:9.75pt;font-weight:400;color:rgba(39,86,130,.5)}.bottom_sign h6{margin:12px 0 0;padding-top:10px;border-top:1px solid hsla(0,0%,44%,.3)}.bottom_sign h6 a{color:#00a6ff}.accord-view{margin-bottom:10px}.accord-main{box-shadow:none!important;border:0!important;position:relative}.accord-main:before{display:none}.accord-main .accord-header{margin-left:auto;margin-right:auto;font-size:12px;line-height:20px;color:#275682;text-align:left;justify-content:flex-start!important}.accord-main .accord-header>div:first-child,.accord-main .accord-header>div:last-child{display:inline-block!important;flex-grow:inherit!important}.accord-main .accord-header>div:last-child{transform:translate(0)!important;position:static!important;padding:0}.accord-main .accord-header>div:last-child>span:first-child{width:40px;height:24px;color:#275682;display:flex;border:1px solid #275682;align-items:center;justify-content:center;background:#f5f5f5}.accord-main .accord-header>div:last-child>span:first-child svg{display:none}.accord-main .accord-header>div:last-child>span:first-child:before{content:"+";font-size:16px;line-height:30px;color:#275682;text-align:center;width:30px;height:30px;background-color:#f5f5f5}.accord-main .accord-header>div:last-child>span:last-child{display:none}.accord-main .accord-header[aria-expanded=true]>div:last-child>span:first-child{background-color:#fef8ec}.accord-main .accord-header[aria-expanded=true]>div:last-child>span:first-child:before{content:"-";background-color:#fef8ec;margin-top:-4px}.accord-main .accord-body{margin-left:auto;margin-right:auto;position:relative}@media (max-width:500px){.productUpload>div,.productUpload>div>div,.productUpload>div>div>div{width:100%!important;min-width:inherit!important}}.text-email label{color:rgba(39,86,130,.5)!important}.text-email label+div:after{border-bottom-color:transparent!important}.text-email p{display:none}.tertiary{background:#efba46!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}.trannferList{border-radius:0!important}.trannferList .transfetListItems{border-radius:0!important;max-height:200px;overflow-x:hidden;overflow-y:auto}.trannferList .transfetListItems .transfetListItemsItem{padding:0!important;border-radius:0!important;overflow:visible!important}.trannferList .transfetListItems .transfetListItemsItem .transferListItemIcon{min-width:22px!important;position:relative}.trannferList .transfetListItems .transfetListItemsItem .transferListItemIcon label{margin:0!important;display:flex;align-items:center;justify-content:center}.trannferList .transfetListItems .transfetListItemsItem .transferListItemIcon label span{padding:0!important}.trannferList .transfetListItems .transfetListItemsItem .transferListItemIcon .transferListItemIconLeft,.trannferList .transfetListItems .transfetListItemsItem .transferListItemIcon .transferListItemIconRight{height:36px;display:flex;align-items:center;justify-content:center;transition:all .2s ease-in-out;position:absolute;z-index:-1;opacity:0}.trannferList .transfetListItems .transfetListItemsItem .transferListItemIcon .transferListItemIconLeft.right,.trannferList .transfetListItems .transfetListItemsItem .transferListItemIcon .transferListItemIconRight.right{align-items:flex-start}.trannferList .transfetListItems .transfetListItemsItem .transferListItemText{margin:0!important;padding:5px 9px!important;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.trannferList .transfetListItems .transfetListItemsItem .transferListItemText,.trannferList .transfetListItems .transfetListItemsItem .transferListItemText span{color:#275682;font-size:11px;line-height:12px;transition:all .2s ease-in-out;font-family:acumin-pro,sans-serif}.trannferList .tranferListSelectAll{text-align:right;margin:12px 0 10px;font-size:11px;line-height:12px}.trannferList .tranferListSelectAll span{cursor:pointer;color:rgba(39,86,130,.5);display:inline-block;margin:0;text-decoration:underline!important;font-size:11px;line-height:12px}.trannferList .trannferListGetHead{text-align:left;margin:6px 0 10px;font-size:10px;line-height:12px}.trannferList .trannferListGetHead span{cursor:pointer;color:rgba(39,86,130,.5);display:inline-block;margin:0;font-size:10px;line-height:12px;text-transform:uppercase;letter-spacing:1px}.trannferList .trannferListPush{padding:0 10px 0 0!important}.trannferList .trannferListPush .trannferListPushIn{min-height:290px}.trannferList .trannferListPush .trannferListPushIn .transfetListItems .transfetListItemsItem{display:flex;flex-direction:row-reverse;background:#f2f2f2!important;padding:0 10px!important}.trannferList .trannferListPush .trannferListPushIn .transfetListItems .transfetListItemsItem:focus .transferListItemIconLeft,.trannferList .trannferListPush .trannferListPushIn .transfetListItems .transfetListItemsItem:hover .transferListItemIconLeft{z-index:1!important;opacity:1!important}.trannferList .trannferListPush .trannferListPushIn .transfetListItems .transfetListItemsItem:focus .transferListItemText,.trannferList .trannferListPush .trannferListPushIn .transfetListItems .transfetListItemsItem:focus .transferListItemText span,.trannferList .trannferListPush .trannferListPushIn .transfetListItems .transfetListItemsItem:hover .transferListItemText,.trannferList .trannferListPush .trannferListPushIn .transfetListItems .transfetListItemsItem:hover .transferListItemText span{font-weight:600!important}.trannferList .trannferListGet{padding:0 0 0 10px!important}.trannferList .trannferListGet .trannferListGetIn{min-height:290px}.trannferList .trannferListGet .trannferListGetIn .transfetListItems .transfetListItemsItem{background:#f0fcf0!important;padding:0 10px!important}.trannferList .trannferListGet .trannferListGetIn .transfetListItems .transfetListItemsItem:focus .transferListItemIconRight,.trannferList .trannferListGet .trannferListGetIn .transfetListItems .transfetListItemsItem:hover .transferListItemIconRight{z-index:1!important;opacity:1!important}.trannferList .trannferListGet .trannferListGetIn .transfetListItems .transfetListItemsItem:focus .transferListItemText,.trannferList .trannferListGet .trannferListGetIn .transfetListItems .transfetListItemsItem:focus .transferListItemText span,.trannferList .trannferListGet .trannferListGetIn .transfetListItems .transfetListItemsItem:hover .transferListItemText,.trannferList .trannferListGet .trannferListGetIn .transfetListItems .transfetListItemsItem:hover .transferListItemText span{font-weight:600!important}.upgradeList{border-radius:0!important}.upgradeList .upgradeListItems{border-radius:0!important;max-height:200px;overflow-x:hidden;overflow-y:auto}.upgradeList .upgradeListItems .upgradeListItemsItem{padding:0!important;border-radius:0!important;overflow:visible!important}.upgradeList .upgradeListItems .upgradeListItemsItem .upgradeListItemIcon{min-width:36px!important;width:36px!important;position:relative}.upgradeList .upgradeListItems .upgradeListItemsItem .upgradeListItemIcon label{margin:0!important;min-width:36px!important;width:36px!important;display:flex;align-items:center;justify-content:center}.upgradeList .upgradeListItems .upgradeListItemsItem .upgradeListItemIcon label span{padding:0!important}.upgradeList .upgradeListItems .upgradeListItemsItem .upgradeListItemIcon .upgradeListItemIconLeft,.upgradeList .upgradeListItems .upgradeListItemsItem .upgradeListItemIcon .upgradeListItemIconRight{min-width:36px!important;width:36px!important;height:36px;display:flex;align-items:center;justify-content:center;transition:all .2s ease-in-out;position:absolute;z-index:-1;opacity:0}.upgradeList .upgradeListItems .upgradeListItemsItem .upgradeListItemText{margin:0!important;padding:5px 9px!important}.upgradeList .upgradeListItems .upgradeListItemsItem .upgradeListItemText,.upgradeList .upgradeListItems .upgradeListItemsItem .upgradeListItemText span{color:#275682;font-size:11px;line-height:12px;transition:all .2s ease-in-out;font-family:acumin-pro,sans-serif}.upgradeList .upgradeListSelectAll{text-align:right;margin:12px 0 10px;font-size:11px;line-height:12px}.upgradeList .upgradeListSelectAll span{cursor:pointer;color:rgba(39,86,130,.5);display:inline-block;margin:0;text-decoration:underline!important;font-size:11px;line-height:12px}.upgradeList .upgradeListGetHead{text-align:left;margin:6px 0 10px;font-size:10px;line-height:12px}.upgradeList .upgradeListGetHead span{cursor:pointer;color:rgba(39,86,130,.5);display:inline-block;margin:0;font-size:10px;line-height:12px;text-transform:uppercase;letter-spacing:1px}.upgradeList .upgradeListPush{padding:0 10px 0 0!important}.upgradeList .upgradeListPush .upgradeListPushIn{min-height:290px;position:relative}.upgradeList .upgradeListPush .upgradeListPushIn .upgradeListItems .upgradeListItemsItem{display:flex;flex-direction:row-reverse;background:#f2f2f2!important}.upgradeList .upgradeListPush .upgradeListPushIn .upgradeListItems .upgradeListItemsItem:hover .upgradeListItemIconLeft{z-index:1!important}.upgradeList .upgradeListPush .upgradeListPushIn .upgradeListItems .upgradeListItemsItem:hover .upgradeListItemText,.upgradeList .upgradeListPush .upgradeListPushIn .upgradeListItems .upgradeListItemsItem:hover .upgradeListItemText span{font-weight:600!important}.upgradeList .upgradeListGet{padding:0 0 0 10px!important}.upgradeList .upgradeListGet .upgradeListGetIn{min-height:290px}.upgradeList .upgradeListGet .upgradeListGetIn .upgradeListItems{max-height:87px;overflow-x:hidden;overflow-y:auto}.upgradeList .upgradeListGet .upgradeListGetIn .upgradeListItems .upgradeListItemsItem{background:#f0fcf0!important}.upgradeList .upgradeListGet .upgradeListGetIn .upgradeListItems .upgradeListItemsItem:focus .upgradeListItemIconRight,.upgradeList .upgradeListGet .upgradeListGetIn .upgradeListItems .upgradeListItemsItem:hover .upgradeListItemIconRight{z-index:1!important;opacity:1!important}.upgradeList .upgradeListGet .upgradeListGetIn .upgradeListItems .upgradeListItemsItem:focus .upgradeListItemText,.upgradeList .upgradeListGet .upgradeListGetIn .upgradeListItems .upgradeListItemsItem:focus .upgradeListItemText span,.upgradeList .upgradeListGet .upgradeListGetIn .upgradeListItems .upgradeListItemsItem:hover .upgradeListItemText,.upgradeList .upgradeListGet .upgradeListGetIn .upgradeListItems .upgradeListItemsItem:hover .upgradeListItemText span{font-weight:600!important}.moveUpDownButton{text-align:right;position:absolute;right:10px;bottom:7px}.priceDetailTable{margin:0;margin-top:20px}.priceDetailTable tbody tr td{color:#275682;font-size:13px;line-height:20px;border:0}.priceDetailTable tbody tr td.text-right{text-align:right}.priceDetailTable tbody tr td.font-600{font-weight:600}.hidden{display:none}#select-languages{height:45px;box-sizing:border-box}#select-languages div{overflow-x:auto;overflow-y:hidden;scrollbar-color:#212121 #ccc;scrollbar-width:thin}#select-languages div div span{line-height:10pt}#select-languages div::-webkit-scrollbar{height:8px;background-color:rgba(39,86,130,0);position:absolute}#select-languages div::-webkit-scrollbar-thumb,#select-languages div::-webkit-scrollbar-track{border:3px solid rgba(39,86,130,0);background-clip:padding-box}#select-languages div::-webkit-scrollbar-track{background-color:#ccc}#select-languages div::-webkit-scrollbar-thumb{background-color:#212121}#select-languages div::-webkit-scrollbar-thumb:hover{border:3px solid rgba(39,86,130,0)}#select-languages div::-moz-scrollbar{height:8px;background-color:rgba(39,86,130,0);position:absolute}#select-languages div::-moz-scrollbar-thumb,#select-languages div::-moz-scrollbar-track{border:3px solid rgba(39,86,130,0);background-clip:padding-box}#select-languages div::-moz-scrollbar-track{background-color:#ccc}#select-languages div::-moz-scrollbar-thumb{background-color:#212121}#select-languages div::-moz-scrollbar-thumb:hover{border:3px solid rgba(39,86,130,0)}#select-languages div::-o-scrollbar{height:8px;background-color:rgba(39,86,130,0);position:absolute}#select-languages div::-o-scrollbar-thumb,#select-languages div::-o-scrollbar-track{border:3px solid rgba(39,86,130,0);background-clip:padding-box}#select-languages div::-o-scrollbar-track{background-color:#ccc}#select-languages div::-o-scrollbar-thumb{background-color:#212121}#select-languages div::-o-scrollbar-thumb:hover{border:3px solid rgba(39,86,130,0)}.templateLoad .square{width:40px;height:40px;background:#f5f5f5;margin-right:30px}.templateLoad .textContent{width:155px;height:12px;background:#f5f5f5}.templateLoad .content{width:100%;height:200px;background:#f5f5f5}.uiSelectOption{color:#275682!important;font-size:9.75pt}.dashboard .dashboard_list{display:none}',""])}}]);