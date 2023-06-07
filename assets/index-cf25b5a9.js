import{u as R,d as q,i as N,p as B,q as _,r as n,l,j as s,P as z,n as A,B as h,T as H,I as j,s as V,t as G,v as J,o as K,w as Q,x as W,y as X,S as Y,z as Z}from"./index-72243b61.js";import{T as $}from"./typingCard-51f3ca22.js";import{M as ee,F as se,D as te,P as ae,a as ie}from"./FormOutlined-559965ca.js";function oe(){const{formatMessage:k}=R();q(k({id:"menu.userManage"}));const[p,I]=N.useMessage(),S="在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。",{userinfo:b}=B(t=>t.userReducer),C=_(),[M,T]=n.useState([]),[L,v]=n.useState([]),[w,d]=n.useState(!1),[c,g]=n.useState(!1),[F,r]=n.useState(!1),[o]=l.useForm(),u=(t=!1)=>{G().then(e=>{if(e.code===0&&(T(e.data.map((a,i)=>({key:String(i),...a}))),t)){const a=e.data.find(i=>i.id===b.id);a&&C(J(a))}})},D=()=>{K().then(t=>{if(t.code===0){const e=t.data.map((a,i)=>({key:String(i),value:a.name,label:a.name}));v(e)}})},y=(t=!1,e)=>{if(d(!0),g(t),e){const{id:a,name:i,role:x,description:m}=e;o.setFieldsValue({id:a,name:i,role:x,description:m})}},O=()=>{console.log(o),o.validateFields().then(t=>{r(!0);const{id:e,name:a,role:i,description:x}=t,m={id:e||"",name:a||"",role:i||"",description:x||""};c?Q(m).then(f=>{r(!1),f.code===0&&(p.success("修改成功"),d(!1),u(!0))}).catch(()=>{r(!1)}):W(m).then(f=>{r(!1),f.code===0&&(p.success("新增成功"),d(!1),u())}).catch(()=>{r(!1)})})},U=()=>{d(!1),g(!1),o.resetFields()},E=t=>{Z({id:t.id}).then(e=>{e.code===0&&(p.success("删除成功"),u())})};n.useEffect(()=>{u(),D()},[]);const P=[{title:"头像",key:"avatar",render:(t,{avatar:e})=>s.jsx("img",{className:"tw-w-[40px]",src:e})},{title:"用户ID",key:"id",dataIndex:"id"},{title:"用户名称",key:"name",dataIndex:"name"},{title:"用户角色",key:"role",render:(t,{role:e})=>s.jsx(X,{color:e==="admin"?"geekblue":e==="editor"?"green":"volcano",children:e},e)},{title:"用户描述",dataIndex:"description",key:"description"},{title:"操作",key:"action",render:(t,e)=>s.jsxs(Y,{children:[s.jsx(h,{type:"primary",shape:"circle",icon:s.jsx(se,{}),onClick:()=>y(!0,e)}),s.jsx(te,{type:"vertical"}),s.jsx(ae,{title:"提示",description:"确定删除？",onConfirm:()=>E(e),okText:"是",cancelText:"否",disabled:e.id==="admin",children:s.jsx(h,{type:"primary",shape:"circle",icon:s.jsx(ie,{}),disabled:e.id==="admin"})})]})}];return s.jsxs(z,{className:"userManage",children:[I,s.jsx($,{title:"用户管理",source:S}),s.jsx(A,{className:"tw-mt-[20px]",title:s.jsx(h,{type:"primary",onClick:()=>y(),children:"新增用户"}),children:s.jsx(H,{columns:P,dataSource:M,pagination:{pageSize:10}})}),s.jsx(ee,{title:c?"编辑":"新增",width:800,open:w,onOk:O,okButtonProps:{loading:F},onCancel:U,children:s.jsxs(l,{className:"tw-mt-[20px]",form:o,name:"user-form",labelCol:{span:4},children:[s.jsx(l.Item,{name:"id",label:"用户ID",rules:[{required:!0}],children:s.jsx(j,{placeholder:"id",disabled:c})}),s.jsx(l.Item,{name:"name",label:"用户名称",rules:[{required:!0}],children:s.jsx(j,{placeholder:"name"})}),s.jsx(l.Item,{name:"role",label:"角色",rules:[{required:!0}],children:s.jsx(V,{placeholder:"role",allowClear:!0,options:[...L],disabled:c})}),s.jsx(l.Item,{name:"description",label:"描述",children:s.jsx(j.TextArea,{placeholder:"description"})})]})})]})}export{oe as default};
