(this["webpackJsonphabit-tracker"]=this["webpackJsonphabit-tracker"]||[]).push([[0],{172:function(e,t,n){},181:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),i=n.n(c),s=(n(172),n(16)),o=n(26),u=n(22),b=n(272),l=n(140),d=n.n(l),j=n(139),p=n.n(j),f=n(261),h=n(285),O=n(289),x=n(269),v=n(266),m=n(265),g=n(27),w="SET",y="RESET",k=function(e,t){return t.type===w?Object(o.a)(Object(o.a)({},e),{},Object(g.a)({},t.field,t.payload)):t.type===y?{}:void 0};var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useReducer)(k,e),n=Object(u.a)(t,2),a=n[0],c=n[1],i=function(e){var t=e.target;return c({type:w,field:t.name,payload:t.value})},s=function(){return c({type:y})};return{formState:a,updateField:i,resetForm:s}},S=n(151),I=n(83),H=n.n(I),N=n(46),E=n(71);var U=function(e){var t=e.name,n=e.initialState,r=void 0===n?{}:n,a=e.reducers,c=void 0===a?{}:a,i=e.routines,s=void 0===i?{}:i,u=e.routineReducers,b=void 0===u?H.a:u,l=e.extraReducers,d=void 0===l?{}:l,j=Object(S.a)(e,["name","initialState","reducers","routines","routineReducers","extraReducers"]);if("function"!==typeof b)throw new Error("routineReducers must be a function that returns a reducerMap");var p=Object.keys(s),f=p.reduce((function(e,n){return e[n]=Object(E.a)("".concat(t,"/").concat(s[n])),e}),{}),h=p.reduce((function(e,t){var n=f[t];return e[t]=Object(E.b)(n),e}),{}),O=Object(N.b)(Object(o.a)({name:t,reducers:c,initialState:r,extraReducers:Object(o.a)(Object(o.a)({},d),b(f))},j));return O.routines=f,O.promisifiedRoutines=h,O},R=U({name:"habits",initialState:{},reducers:{updateHabit:function(e,t){var n=t.payload,r=n.habit,a=n.id;e[a]=Object(o.a)(Object(o.a)({},e[a]),r)},addHabit:function(e,t){var n=t.payload,r=n.habit;e[n.id]=r},deleteHabit:function(e,t){delete e[t.payload.id]}},routines:{updateHistory:"UPDATE_HISTORY",createHabit:"CREATE_HABIT",updateHabit:"UPDATE_HABIT",deleteHabit:"DELETE_HABIT",fetchHabit:"FETCH_HABIT",swapHabit:"SWAP_HABIT"},routineReducers:function(e){return Object(g.a)({},e.createHabit.SUCCESS,(function(e,t){var n=t.payload,r=n.habit;e[n.id]=r}))}}),T=n(19),D=R.routines;var A=function(){var e=Object(T.d)();return Object(r.useCallback)((function(t){var n=t.habitName;e(D.createHabit.trigger({habitName:n}))}),[e])},F=n(39),G=function(e){return e.session},P=Object(F.a)(G,(function(e){return Boolean(e.user.uid)})),W=function(){return Object(T.e)(P)},q=n(2);function L(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],c=C(),i=c.formState,s=c.updateField,o=c.resetForm,b=A(),l=W(),d=Object(r.useCallback)((function(){a(!0)}),[]),j=Object(r.useCallback)((function(){a(!1)}),[]);return l?Object(q.jsxs)("div",{children:[Object(q.jsx)(f.a,{onClick:d,children:"Create Habit"}),Object(q.jsxs)(O.a,{open:n,onClose:j,"aria-labelledby":"create-habit-title",children:[Object(q.jsx)(m.a,{id:"create-habit-title",children:"Create Habit"}),Object(q.jsx)(v.a,{children:Object(q.jsx)(h.a,{autoFocus:!0,margin:"dense",id:"habitName",name:"habitName",value:i.habitName||"",onChange:s,label:"Habit Name",type:"text",fullWidth:!0,autoComplete:"off"})}),Object(q.jsxs)(x.a,{children:[Object(q.jsx)(f.a,{onClick:j,children:"Cancel"}),Object(q.jsx)(f.a,{onClick:function(e){b(i),o(),j()},children:"Create"})]})]})]}):null}var B=n(276),M=n(268),z=n(274),J=n(291),_=n(277),K=n(290),Y=n(154),V=n(275),X=n(155),Z=n(273);var $=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(r.useState)(e),n=Object(u.a)(t,2),a=n[0],c=n[1],i=Object(r.useCallback)((function(){c(!a)}),[a]);return[a,i,c]},Q=U({name:"session",initialState:{user:{},userSettings:{habitIds:[]}},reducers:{setCurrentUser:function(e,t){e.user=t.payload.user},setUserSettings:function(e,t){e.userSettings=t.payload.userSettings}},routines:{login:"LOGIN",logout:"LOGOUT",createUser:"CREATE_USER"},routineReducers:function(e){var t;return t={},Object(g.a)(t,e.logout.SUCCESS,(function(e){e.user={}})),Object(g.a)(t,e.login.SUCCESS,(function(e,t){e.user=t.payload.user})),Object(g.a)(t,e.createUser.SUCCESS,(function(e,t){e.user=t.payload.user})),t}}),ee=Q.routines;var te=function(){var e=Object(T.d)();return Object(r.useCallback)((function(){e(ee.logout.trigger())}),[e])},ne=n(36),re=n(149),ae=n(270);var ce,ie,se=function(e){var t=e.children,n=a.a.useMemo((function(){return Object(re.a)({palette:{type:"dark"}})}),[]);return Object(q.jsx)(ae.a,{theme:n,children:t})},oe=n(12),ue=n(271),be=Object(oe.a)(ce||(ce=Object(s.a)(["\n  position: relative;\n  ::after {\n    content: '","';\n    position: absolute;\n    left: 10px;\n    top: 10px;\n  }\n"])),"".concat(Object(ue.a)(Date.now())).padStart(2,"0")),le=Object(oe.a)(ie||(ie=Object(s.a)(["\n  a {\n    color: inherit;\n    text-decoration: none;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]))),de=function(e){var t=$(),n=Object(u.a)(t,2),a=n[0],c=n[1],i=Object(r.useRef)(),s=W(),l=te();return Object(q.jsx)(b.a,{color:"inherit",position:"sticky",children:Object(q.jsxs)(Z.a,{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(q.jsx)(X.a,{variant:"h6",noWrap:!0,children:Object(q.jsx)(ne.a,{style:{color:"inherit",textDecoration:"none"},to:"/",children:"Habit Tracker"})}),Object(q.jsx)("div",{style:{flexGrow:1,maxWidth:"960px"}}),Object(q.jsx)(L,{}),Object(q.jsx)("div",{className:be,children:Object(q.jsx)(p.a,{fontSize:"large"})}),Object(q.jsx)(z.a,{edge:"end","aria-label":"account of current user",ref:i,onClick:c,"aria-haspopup":"true",color:"inherit",children:Object(q.jsx)(d.a,{})}),Object(q.jsx)(V.a,{open:a,anchorEl:i.current,transition:!0,children:function(e){var t=e.TransitionProps,n=e.placement;return Object(q.jsx)(M.a,Object(o.a)(Object(o.a)({},t),{},{style:{transformOrigin:"bottom"===n?"center top":"center bottom"},children:Object(q.jsx)(Y.a,{children:Object(q.jsx)(B.a,{onClickAway:c,children:Object(q.jsxs)(q.Fragment,{children:[!s&&Object(q.jsxs)(K.a,{autoFocusItem:a,id:"menu-list-grow",onKeyDown:c,className:le,children:[Object(q.jsx)(J.a,{onClick:c,children:Object(q.jsx)(ne.a,{component:_.a,to:"/signin",children:"Login"})}),!1]}),s&&Object(q.jsx)(K.a,{autoFocusItem:a,id:"menu-list-grow",onKeyDown:c,className:le,children:Object(q.jsx)(J.a,{onClick:function(){l(),c()},children:"Logout"})})]})})})}))}})]})})},je=Q.routines;var pe,fe=function(){var e=Object(T.d)();return Object(r.useCallback)((function(t){e(je.login.trigger(t))}),[e])},he=Object(oe.a)(pe||(pe=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  > * {\n    margin: 5px;\n  }\n"]))),Oe=function(e){var t=e.className,n=C(),a=n.formState,c=n.updateField,i=fe(),s=Object(r.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),i(a)}),[a,i]);return Object(q.jsx)("div",{children:Object(q.jsxs)("form",{onSubmit:s,className:Object(oe.b)(he,t),children:["Sign In",Object(q.jsx)(h.a,{type:"email",label:"Email Address",value:a.email||"",name:"email",placeholder:"Email Address",onChange:c}),Object(q.jsx)(h.a,{type:"password",label:"Password",required:!0,name:"password",value:a.password||"",placeholder:"Your Password",onChange:c}),Object(q.jsx)(f.a,{variant:"contained",color:"primary",type:"submit",children:"Sign in"}),Object(q.jsx)(ne.a,{to:"/signup",children:"Sign up here"}),Object(q.jsx)(ne.a,{to:"/passwordreset",children:"Forgot Password?"})]})})},xe=Q.routines;var ve,me=function(){var e=Object(T.d)();return Object(r.useCallback)((function(t){var n=t.displayName,r=t.email,a=t.password;e(xe.createUser.trigger({displayName:n,email:r,password:a}))}),[e])},ge=Object(oe.a)(ve||(ve=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  > * {\n    margin: 10px;\n  }\n"]))),we=function(e){var t=e.className,n=C(),a=n.formState,c=n.updateField,i=me(),s=Object(r.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),i(a)}),[i,a]);return Object(q.jsx)("div",{children:Object(q.jsxs)("form",{onSubmit:s,className:Object(oe.b)(ge,t),children:["Sign Up",Object(q.jsx)(h.a,{type:"text",label:"Display Name",value:a.displayName||"",name:"displayName",placeholder:"Display Name",onChange:c,required:!0}),Object(q.jsx)(h.a,{type:"email",label:"Email Address",value:a.email||"",name:"email",placeholder:"Email Address",onChange:c,required:!0}),Object(q.jsx)(h.a,{type:"password",label:"Password",required:!0,name:"password",value:a.password||"",placeholder:"Your Password",onChange:c}),Object(q.jsx)(f.a,{variant:"contained",color:"primary",type:"submit",children:"Sign Up"}),Object(q.jsx)(ne.a,{to:"/signin",children:"Sign in here"}),Object(q.jsx)(ne.a,{to:"/passwordreset",children:"Forgot Password?"})]})})};var ye=function(){return Object(q.jsx)("div",{})},ke=n(65),Ce=n.n(ke);n(129);var Se=function(){var e=Object(T.d)();Object(r.useEffect)((function(){Ce.a.auth().onAuthStateChanged((function(t){e(Q.actions.setCurrentUser({user:t||{}}))}))}),[e])},Ie=n(20);n(181);var He=function(e){var t=e.path,n=e.children;return W()?Object(q.jsx)(Ie.b,{path:t,children:n}):Object(q.jsx)(Ie.a,{to:"/"})};var Ne=function(e){var t=e.path,n=e.children;return W()?Object(q.jsx)(Ie.a,{to:"/"}):Object(q.jsx)(Ie.b,{path:t,children:n})},Ee=n(48),Ue=n.n(Ee),Re=Object(F.a)([G],(function(e){return Ue()(e,"userSettings.habitIds",[])})),Te=function(){return Object(T.e)(Re)},De=n(278),Ae=n(279);var Fe,Ge,Pe,We,qe,Le,Be=function(e){for(var t=e.month,n=e.year,r=Object(De.a)(new Date(n,t)),a=Object(Ae.a)(new Date(n,t,1)),c=[],i=1;i<=r;){var s=[];if(0===c.length)for(var o=0;o<=6;o++)o<a?s.push(-1):(s.push(i),i++);else for(var u=0;u<=6;u++)i<=r?s.push(i):s.push(-1),i++;c.push(s)}return c},Me=Object(oe.a)(Fe||(Fe=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),ze=Object(oe.a)(Ge||(Ge=Object(s.a)(["\n  &:hover {\n    cursor: pointer;\n    background-color: rgb(180, 180, 180);\n  }\n"]))),Je=Object(oe.a)(Pe||(Pe=Object(s.a)(["\n  height: 30px;\n  width: 30px;\n  border-radius: 5px;\n  background-color: rgb(220, 220, 220);\n  margin: 5px;\n"]))),_e=(Object(oe.a)(We||(We=Object(s.a)(["\n  background-color: rgb(51, 192, 255);\n  &:hover {\n    background-color: rgb(51, 192, 255, 0.5);\n  }\n"]))),Object(oe.a)(qe||(qe=Object(s.a)(["\n  background-color: #282d33;\n  color: white;\n"])))),Ke=Object(oe.a)(Le||(Le=Object(s.a)(["\n  background-color: gray;\n  &:hover {\n    opacity: 0.5;\n  }\n"])));var Ye=function(e){var t=e.week,n=void 0===t?[]:t,r=e.onDayClick,a=e.history;return Object(q.jsx)("div",{className:Object(oe.b)(Me),children:n.map((function(e,t){var n=e>0?function(){return r&&r(e)}:H.a,c=Object(oe.b)(Je,_e,e>0&&ze,a[e]&&!1,a[e]&&Ke);return Object(q.jsx)("div",{className:c,onClick:n,children:e>0?e:""},"".concat(e,"-").concat(t))}))})};var Ve=function(e){return e.habits},Xe=function(e){return Object(F.a)([Ve],(function(t){return t[e]}))},Ze=function(e){return Object(T.e)(Xe(e))};var $e,Qe,et=function(e){var t=e.month,n=e.year,a=e.habitId,c=Object(r.useMemo)((function(){return Be({month:t,year:n})}),[t,n]),i=Object(T.d)(),s=Object(r.useCallback)((function(e){i(R.routines.updateHistory.trigger({day:e,month:t,year:n,habitId:a}))}),[i,a,t,n]),o=Ze(a).history,u=void 0===o?{}:o;return Object(q.jsx)("div",{children:c.map((function(e,r){return Object(q.jsx)(Ye,{week:e,onDayClick:s,history:Ue()(u,[n,t],{})},r)}))})},tt=n(282),nt=n(147),rt=n.n(nt),at=n(280),ct=n(281),it=n(142),st=n.n(it),ot=n(143),ut=n.n(ot),bt=n(145),lt=n.n(bt),dt=n(144),jt=n.n(dt),pt=Object(oe.a)($e||($e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ft=Object(oe.a)(Qe||(Qe=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),ht=[{name:"January"},{name:"February"},{name:"March"},{name:"April"},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"September"},{name:"October"},{name:"November"},{name:"December"}];var Ot=function(e){var t=e.children,n=e.currentMonth,a=void 0===n?Object(at.a)(Date.now()):n,c=e.currentYear,i=void 0===c?Object(ct.a)(Date.now()):c,s=Object(r.useState)(a),o=Object(u.a)(s,2),b=o[0],l=o[1],d=Object(r.useState)(i),j=Object(u.a)(d,2),p=j[0],f=j[1],h=Object(r.useState)(!1),O=Object(u.a)(h,2),x=O[0],v=O[1],m=Object(r.useCallback)((function(){var e=b-1;e<0&&(e=11,f(p-1));l(e)}),[b,p]),g=Object(r.useCallback)((function(){var e=b+1;e>11&&(e=0,f(p+1));l(e)}),[b,p]);return Object(q.jsxs)("div",{className:pt,children:[Object(q.jsxs)("div",{className:ft,children:[Object(q.jsxs)("div",{className:ft,children:[Object(q.jsx)(z.a,{size:"small",onClick:m,children:Object(q.jsx)(st.a,{})}),Object(q.jsx)(z.a,{size:"small",onClick:g,children:Object(q.jsx)(ut.a,{})}),Object(q.jsxs)(X.a,{variant:"h6",noWrap:!0,children:[ht[b].name," ",p]})]}),Object(q.jsx)(z.a,{size:"small",onClick:function(){v(!x)},children:x?Object(q.jsx)(jt.a,{}):Object(q.jsx)(lt.a,{})})]}),Object(q.jsx)("div",{children:t({month:b,year:p,notesOpen:x})})]})},xt=n(288),vt=n(152),mt=n(146),gt=n.n(mt),wt=R.routines;var yt=function(e){var t=Object(T.d)();return Object(r.useCallback)((function(){t(wt.deleteHabit.trigger({habitId:e}))}),[t,e])},kt=R.routines;var Ct=function(){var e=Object(T.d)();return Object(r.useCallback)((function(t){var n=t.id,r=t.habit;e(kt.updateHabit.trigger({id:n,habit:r}))}),[e])},St=function(e){var t=e.habitId,n=e.isOpen,r=e.setIsRenameOpen,a=Ze(t),c=C(),i=c.formState,s=c.updateField,o=c.resetForm,u=Ct();return Object(q.jsxs)(O.a,{open:n,onClose:function(){return r(!1)},"aria-labelledby":"update-dialog",children:[Object(q.jsxs)(m.a,{id:"update-dialog",children:["Update Habit Name - ",a.name]}),Object(q.jsx)(v.a,{children:Object(q.jsx)(h.a,{autoFocus:!0,margin:"dense",id:"habitName",name:"habitName",value:i.habitName||"",onChange:s,label:"Habit Name",type:"text",fullWidth:!0,autoComplete:"off"})}),Object(q.jsxs)(x.a,{children:[Object(q.jsx)(f.a,{onClick:function(){return r(!1)},color:"primary",children:"Cancel"}),Object(q.jsx)(f.a,{onClick:function(e){u({id:t,habit:{name:i.habitName}}),o(),r(!1)},color:"primary",children:"Update Name"})]})]})},It=function(e){var t=e.isOpen,n=e.deleteHabit,r=e.closeDialog;return Object(q.jsxs)(O.a,{open:t,onClose:function(){r()},"aria-labelledby":"update-dialog",children:[Object(q.jsx)(m.a,{id:"update-dialog",children:"Delete Habit"}),Object(q.jsx)(v.a,{children:"Are you sure you want to delete this habit?"}),Object(q.jsxs)(x.a,{children:[Object(q.jsx)(f.a,{onClick:function(){r()},children:"Cancel"}),Object(q.jsx)(f.a,{onClick:function(e){n(),r()},children:"Delete"})]})]})},Ht=function(e){var t=e.habitId,n=Ze(t),a=Object(r.useRef)(),c=Object(r.useState)(!1),i=Object(u.a)(c,2),s=i[0],o=i[1],b=function(){return o(!1)},l=Object(r.useState)(!1),d=Object(u.a)(l,2),j=d[0],p=d[1],f=Object(r.useState)(!1),h=Object(u.a)(f,2),O=h[0],x=h[1],v=yt(t);return n?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(z.a,{ref:a,edge:"end","aria-label":"options for habit",onClick:function(){return o(!0)},children:Object(q.jsx)(gt.a,{})}),Object(q.jsxs)(vt.a,{id:"simple-menu",anchorEl:a.current,keepMounted:!0,open:s,onClose:b,children:[Object(q.jsx)(J.a,{onClick:function(){p(!0),b()},children:"Rename"}),Object(q.jsx)(J.a,{onClick:function(){x(!0),b()},children:"Delete"})]}),Object(q.jsx)(St,{isOpen:j,habitId:t,setIsRenameOpen:p}),Object(q.jsx)(It,{isOpen:O,deleteHabit:v,closeDialog:function(){return x(!1)}})]}):null},Nt=n(287),Et=R.routines;var Ut,Rt,Tt,Dt,At,Ft,Gt,Pt,Wt,qt,Lt,Bt=function(){var e=Object(T.d)();return Object(r.useCallback)((function(t){var n=t.firstHabitId,r=t.secondHabitId;e(Et.swapHabit.trigger({firstHabitId:n,secondHabitId:r}))}),[e])},Mt=Object(oe.a)(Ut||(Ut=Object(s.a)(["\n  opacity: 0.8;\n"]))),zt=Object(oe.a)(Rt||(Rt=Object(s.a)(["\n  opacity: 0.5;\n"]))),Jt=function(e){var t,n=e.habitId,r=Bt(),a=Object(Nt.a)({accept:"habit",canDrop:function(e){return"habit"===e.type&&e.id!==n},drop:function(e,t){var a=e.id;"habit"===e.type&&r({firstHabitId:a,secondHabitId:n})},collect:function(e){return{canDrop:e.canDrop(),isHovering:e.isOver()}}}),c=Object(u.a)(a,2),i=c[0],s=c[1];return Object(q.jsx)("div",{ref:s,className:Object(oe.b)((t={},Object(g.a)(t,zt,i.canDrop),Object(g.a)(t,Mt,i.isHovering&&i.canDrop),t)),children:e.children})},_t=n(267),Kt=Object(oe.a)(Tt||(Tt=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Yt=Object(oe.a)(Dt||(Dt=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),Vt=Object(oe.a)(At||(At=Object(s.a)(["\n  padding: 0.75rem;\n  border-radius: 0.5rem;\n  border: 1px solid black;\n"]))),Xt=Object(oe.a)(Ft||(Ft=Object(s.a)(["\n  padding: 0.75rem;\n  border-radius: 0.5rem;\n  border: 1px solid black;\n  outline: none;\n"]))),Zt=function(e){var t,n,a=e.notes,c=e.notesOpen,i=e.updateNotes,s=Object(r.useState)(!1),o=Object(u.a)(s,2),b=o[0],l=o[1],d=C(),j=d.formState,p=d.updateField,h=d.resetForm;return c?b?Object(q.jsxs)("div",{className:Kt,children:[Object(q.jsx)(_t.a,{className:Xt,autoFocus:!0,id:"notes",name:"notes",value:null!==(t=null!==(n=j.notes)&&void 0!==n?n:a)&&void 0!==t?t:"",onChange:p,autoComplete:"off"}),Object(q.jsxs)("div",{className:Yt,children:[Object(q.jsx)(f.a,{onClick:function(){return l(!1)},color:"primary",children:"Cancel"}),Object(q.jsx)(f.a,{onClick:function(e){i&&i(j.notes),h(),l(!1)},color:"primary",children:"Update"})]})]}):Object(q.jsx)("pre",{className:Vt,onClick:function(){l(!b)},children:a.length?a:"No Notes"}):null},$t=Object(oe.a)(Gt||(Gt=Object(s.a)(["\n  margin: 8px;\n  padding: 16px;\n  min-height: 352px;\n  text-transform: capitalize;\n  position: relative;\n"]))),Qt=Object(oe.a)(Pt||(Pt=Object(s.a)(["\n  flex-grow: 1;\n"]))),en=Object(oe.a)(Wt||(Wt=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),tn=Object(oe.a)(qt||(qt=Object(s.a)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 18ch;\n"]))),nn=function(e){var t=e.habitId,n=e.order,r=Ze(t),a=Object(xt.a)({item:{id:t,type:"habit",order:n}}),c=Object(u.a)(a,3),i=c[1],s=c[2],o=Ct(),b=function(e){o({id:t,habit:{notes:e}})};if(!r)return null;var l=r.name,d=r.notes;return Object(q.jsx)(Jt,{habitId:t,children:Object(q.jsxs)(tt.a,{className:$t,ref:s,children:[Object(q.jsxs)("div",{className:en,children:[Object(q.jsx)(z.a,{ref:i,edge:"start","aria-label":"drag drop indicator for reordering habits",children:Object(q.jsx)(rt.a,{})}),Object(q.jsx)(X.a,{variant:"h6",className:tn,children:l}),Object(q.jsx)("div",{className:Qt}),Object(q.jsx)(Ht,{habitId:t})]}),Object(q.jsx)(Ot,{children:function(e){var n=e.month,r=e.year,a=e.notesOpen;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Zt,{notes:null!==d&&void 0!==d?d:"",notesOpen:a,updateNotes:b}),Object(q.jsx)(et,{month:n,year:r,habitId:t})]})}})]})})},rn=n(111),an=Object(oe.a)(Lt||(Lt=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  max-width: 1000px;\n  align-items: center;\n  @media only screen and (max-width: 1000px) {\n    justify-content: center;\n  }\n"]))),cn=function(){var e=Te();return Object(q.jsx)(q.Fragment,{children:e.length>0&&Object(q.jsx)(rn.b,{flipKey:e.join(""),children:Object(q.jsx)("div",{className:an,children:e.map((function(e,t){return Object(q.jsx)(rn.a,{flipId:e,children:Object(q.jsx)("div",{children:Object(q.jsx)(nn,{habitId:e,order:t})})},e)}))})})})};var sn,on=function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)(X.a,{variant:"h1",children:"Habit Tracker"}),Object(q.jsx)(X.a,{variant:"h4",children:"A Simple Habit Tracker App"}),Object(q.jsx)(X.a,{variant:"h5",children:"Login To Begin"})]})},un=Object(oe.a)(sn||(sn=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));var bn=function(){Se();var e=W();return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(de,{}),Object(q.jsx)("div",{children:Object(q.jsxs)(Ie.d,{children:[Object(q.jsx)(Ne,{path:"/signin",children:Object(q.jsx)(Oe,{})}),Object(q.jsx)(Ne,{path:"/signup",children:Object(q.jsx)(we,{})}),Object(q.jsx)(Ne,{path:"/passwordreset",children:Object(q.jsx)("div",{children:"WIP"})}),Object(q.jsx)(He,{path:"/profile",children:Object(q.jsx)(ye,{})}),Object(q.jsx)(He,{path:"/notes",children:Object(q.jsx)(ye,{})}),Object(q.jsx)(Ie.b,{path:"/",children:Object(q.jsx)("div",{className:un,children:e?Object(q.jsx)(cn,{}):Object(q.jsx)(on,{})})})]})})]})},ln=n(133),dn=n(59),jn=n(60),pn=n(8),fn=n.n(pn),hn=n(5),On=n(25);n(223);Ce.a.initializeApp({apiKey:"AIzaSyAz2bDKjUq8xaRJba2qF5JdTnbctXnkxZ4",authDomain:"habit-tracker-9e016.firebaseapp.com",databaseURL:"https://habit-tracker-9e016.firebaseio.com",projectId:"habit-tracker-9e016",storageBucket:"habit-tracker-9e016.appspot.com",messagingSenderId:"13324547217",appId:'1:13324547217:web:c21e824ec11e0271523b30"'});var xn=Ce.a.auth(),vn=Ce.a.firestore();function mn(){return(mn=Object(On.a)(fn.a.mark((function e(t){var n,r;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.next=3,xn.signInWithEmailAndPassword(n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var gn=function(e){return mn.apply(this,arguments)},wn=n(29),yn=fn.a.mark(kn);function kn(e){var t,n,r,a,c;return fn.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,Object(hn.f)(Q.routines.login.request());case 4:return i.next=6,Object(hn.b)(gn,{email:n,password:r});case 6:return a=i.sent,c=a.user,i.next=10,Object(hn.f)(Q.routines.login.success({user:c}));case 10:return i.next=12,Object(hn.f)(Object(wn.d)("/"));case 12:i.next=19;break;case 14:return i.prev=14,i.t0=i.catch(1),console.error(i.t0),i.next=19,Object(hn.f)(Q.routines.login.failure(i.t0));case 19:return i.prev=19,i.next=22,Object(hn.f)(Q.routines.login.fulfill());case 22:return i.finish(19);case 23:case"end":return i.stop()}}),yn,null,[[1,14,19,23]])}var Cn=kn;function Sn(e){return In.apply(this,arguments)}function In(){return(In=Object(On.a)(fn.a.mark((function e(t){var n,r;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("User does not exist");case 2:return n=vn.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=11;break}return r={habitIds:[]},e.next=10,n.set(r);case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Hn(){return(Hn=Object(On.a)(fn.a.mark((function e(t){var n,r,a,c,i;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,a=t.displayName,e.next=3,xn.createUserWithEmailAndPassword(n,r);case 3:return c=e.sent,(i=c.user).updateProfile({displayName:a}),Sn(i),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Nn=function(e){return Hn.apply(this,arguments)},En=fn.a.mark(Un);function Un(e){var t,n,r,a,c;return fn.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.displayName,r=t.email,a=t.password,i.prev=1,i.next=4,Object(hn.f)(Q.routines.createUser.request());case 4:return i.next=6,Object(hn.b)(Nn,{email:r,password:a,displayName:n});case 6:return c=i.sent,i.next=9,Object(hn.f)(Q.routines.createUser.success({user:c}));case 9:return i.next=11,Object(hn.f)(Object(wn.d)("/"));case 11:i.next=18;break;case 13:return i.prev=13,i.t0=i.catch(1),console.error(i.t0),i.next=18,Object(hn.f)(Q.routines.createUser.failure(i.t0));case 18:return i.prev=18,i.next=21,Object(hn.f)(Q.routines.createUser.fulfill());case 21:return i.finish(18);case 22:case"end":return i.stop()}}),En,null,[[1,13,18,22]])}var Rn=Un;var Tn=function(){return xn.signOut()},Dn=fn.a.mark(An);function An(){return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(hn.f)(Q.routines.logout.request());case 3:return e.next=5,Object(hn.b)(Tn);case 5:return e.next=7,Object(hn.f)(Q.routines.logout.success());case 7:e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.next=14,Object(hn.f)(Q.routines.logout.failure(e.t0));case 14:return e.prev=14,e.next=17,Object(hn.f)(Q.routines.logout.fulfill());case 17:return e.finish(14);case 18:case"end":return e.stop()}}),Dn,null,[[0,9,14,18]])}var Fn=An,Gn=Object(F.a)(G,(function(e){return Ue()(e,"user.uid",void 0)})),Pn=fn.a.mark(Bn),Wn=fn.a.mark(Mn),qn=fn.a.mark(zn);function Ln(e){var t=e.userId;return Object(jn.b)((function(e){return vn.doc("users/".concat(t)).onSnapshot((function(n){e({data:n.data(),userId:t})}))}))}function Bn(){var e,t,n,r;return fn.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(hn.h)(Gn);case 2:return e=a.sent,a.next=5,Object(hn.b)(Ln,{userId:e});case 5:t=a.sent,a.prev=6;case 7:return a.next=10,Object(hn.j)(t);case 10:return n=a.sent,r=n.data,a.next=14,Object(hn.f)(Q.actions.setUserSettings({userSettings:r}));case 14:a.next=7;break;case 16:return a.prev=16,a.next=19,Object(hn.d)();case 19:if(!a.sent){a.next=21;break}t.close();case 21:return a.finish(16);case 22:case"end":return a.stop()}}),Pn,null,[[6,,16,22]])}function Mn(e){var t;return fn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(hn.e)(Bn,e);case 2:return t=n.sent,n.next=5,Object(hn.j)(Q.routines.logout.SUCCESS);case 5:if(n.sent.type!==Q.routines.logout.SUCCESS){n.next=9;break}return n.next=9,Object(hn.c)(t);case 9:case"end":return n.stop()}}),Wn)}function zn(){return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(hn.l)([Q.actions.setCurrentUser,Q.routines.login.SUCCESS,Q.routines.createUser.SUCCESS],Mn);case 2:case"end":return e.stop()}}),qn)}var Jn=fn.a.mark(_n);function _n(){return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(hn.k)(Q.routines.login.TRIGGER,Cn);case 2:return e.next=4,Object(hn.k)(Q.routines.logout.TRIGGER,Fn);case 4:return e.next=6,Object(hn.k)(Q.routines.createUser.TRIGGER,Rn);case 6:return e.next=8,Object(hn.e)(zn);case 8:case"end":return e.stop()}}),Jn)}var Kn=_n,Yn=n(96);function Vn(){return(Vn=Object(On.a)(fn.a.mark((function e(t){var n,r,a,c,i,s,u;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,r=t.habitName,a=t.options,c=void 0===a?{}:a,i=vn.collection("users").doc(n),s=vn.collection("habits").doc(),u=s.id,e.next=6,vn.runTransaction(function(){var e=Object(On.a)(fn.a.mark((function e(t){var a,b;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(i);case 2:a=e.sent,b=a.data(),t.set(s,Object(o.a)({name:r,userId:n,archived:!1},c)),t.update(i,{habitIds:[].concat(Object(Yn.a)(b.habitIds),[u])});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:return e.t0=u,e.next=9,vn.collection("habits").doc(u).get();case 9:return e.t1=e.sent.data(),e.abrupt("return",[e.t0,e.t1]);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Xn=function(e){return Vn.apply(this,arguments)},Zn=fn.a.mark($n);function $n(e){var t,n,r,a,c,i,s,o,b;return fn.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,n=t.habitName,r=t.options,a=void 0===r?{}:r,l.next=3,Object(hn.h)(Gn);case 3:return c=l.sent,l.prev=4,l.next=7,Object(hn.f)(R.routines.createHabit.request());case 7:return l.next=9,Object(hn.b)(Xn,{userId:c,habitName:n,options:a});case 9:return i=l.sent,s=Object(u.a)(i,2),o=s[0],b=s[1],l.next=15,Object(hn.f)(R.routines.createHabit.success({habit:b,id:o}));case 15:l.next=22;break;case 17:return l.prev=17,l.t0=l.catch(4),console.error(l.t0),l.next=22,Object(hn.f)(R.routines.createHabit.failure(l.t0));case 22:return l.prev=22,l.next=25,Object(hn.f)(R.routines.createHabit.fulfill());case 25:return l.finish(22);case 26:case"end":return l.stop()}}),Zn,null,[[4,17,22,26]])}var Qn=$n;function er(){return(er=Object(On.a)(fn.a.mark((function e(t){var n,r,a,c;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.habit,a=vn.collection("habits").doc(n),c=Object(o.a)({},r),e.next=5,a.set(c,{merge:!0});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var tr=function(e){return er.apply(this,arguments)},nr=fn.a.mark(rr);function rr(e){var t,n,r;return fn.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.id,r=t.habit,a.prev=1,a.next=4,Object(hn.f)(R.routines.updateHabit.request());case 4:return a.next=6,Object(hn.b)(tr,{id:n,habit:r});case 6:return a.next=8,Object(hn.f)(R.routines.updateHabit.success({id:n,updatedHabitProperties:r}));case 8:a.next=15;break;case 10:return a.prev=10,a.t0=a.catch(1),console.error(a.t0),a.next=15,Object(hn.f)(R.routines.updateHabit.failure(a.t0));case 15:return a.prev=15,a.next=18,Object(hn.f)(R.routines.updateHabit.fulfill());case 18:return a.finish(15);case 19:case"end":return a.stop()}}),nr,null,[[1,10,15,19]])}var ar=rr;function cr(){return(cr=Object(On.a)(fn.a.mark((function e(t){var n,r,a,c,i,s,o;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.year,r=t.month,a=t.day,c=t.habitId,i=t.newValue,s=vn.collection("habits").doc(c),o={history:Object(g.a)({},n,Object(g.a)({},r,Object(g.a)({},a,i)))},e.next=5,s.set(o,{merge:!0});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ir=function(e){return cr.apply(this,arguments)},sr=fn.a.mark(or);function or(e){var t,n,r,a,c,i,s,o,u;return fn.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return t=e.payload,n=t.day,r=t.month,a=t.year,c=t.habitId,b.prev=1,b.next=4,Object(hn.f)(R.routines.updateHistory.request());case 4:return b.next=6,Object(hn.h)(Xe(c));case 6:return i=b.sent,s=i.history,o=void 0===s?{}:s,u=Ue()(o,[a,r,n],!1),b.next=11,Object(hn.b)(ir,{year:a,month:r,day:n,habitId:c,newValue:!u});case 11:return b.next=13,Object(hn.f)(R.routines.updateHistory.success());case 13:b.next=20;break;case 15:return b.prev=15,b.t0=b.catch(1),console.error(b.t0),b.next=20,Object(hn.f)(R.routines.updateHistory.failure(b.t0));case 20:return b.prev=20,b.next=23,Object(hn.f)(R.routines.updateHistory.fulfill());case 23:return b.finish(20);case 24:case"end":return b.stop()}}),sr,null,[[1,15,20,24]])}var ur=or,br=fn.a.mark(pr),lr=fn.a.mark(fr),dr=fn.a.mark(hr);function jr(e){var t=e.userId;return Object(jn.b)((function(e){return vn.collection("habits").where("userId","==",t).where("archived","==",!1).onSnapshot((function(t){t.docChanges().forEach((function(t){e({type:t.type,data:t.doc.data(),id:t.doc.id})}))}))}))}function pr(e){var t,n,r,a,c,i;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(hn.h)(Gn);case 2:return t=e.sent,e.next=5,Object(hn.b)(jr,{userId:t});case 5:n=e.sent,e.prev=6;case 7:return e.next=10,Object(hn.j)(n);case 10:r=e.sent,a=r.data,c=r.id,i=r.type,e.t0=i,e.next="added"===e.t0?17:"modified"===e.t0?20:"removed"===e.t0?23:26;break;case 17:return e.next=19,Object(hn.f)(R.actions.addHabit({habit:a,id:c}));case 19:return e.abrupt("break",27);case 20:return e.next=22,Object(hn.f)(R.actions.updateHabit({habit:a,id:c}));case 22:return e.abrupt("break",27);case 23:return e.next=25,Object(hn.f)(R.actions.deleteHabit({habit:a,id:c}));case 25:case 26:return e.abrupt("break",27);case 27:e.next=7;break;case 29:return e.prev=29,e.next=32,Object(hn.d)();case 32:if(!e.sent){e.next=34;break}n.close();case 34:return e.finish(29);case 35:case"end":return e.stop()}}),br,null,[[6,,29,35]])}function fr(e){var t;return fn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(hn.e)(pr,e);case 2:return t=n.sent,n.next=5,Object(hn.j)(Q.routines.logout.SUCCESS);case 5:if(n.sent.type!==Q.routines.logout.SUCCESS){n.next=9;break}return n.next=9,Object(hn.c)(t);case 9:case"end":return n.stop()}}),lr)}function hr(){return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(hn.l)([Q.actions.setCurrentUser,Q.routines.login.SUCCESS,Q.routines.createUser.SUCCESS],fr);case 2:case"end":return e.stop()}}),dr)}var Or=hr;function xr(){return(xr=Object(On.a)(fn.a.mark((function e(t){var n,r,a,c;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,r=t.habitId,a=vn.collection("users").doc(n),c=vn.collection("habits").doc(r),e.next=5,vn.runTransaction(function(){var e=Object(On.a)(fn.a.mark((function e(t){var n,i,s;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(a);case 2:n=e.sent,i=n.data(),t.delete(c),s=i.habitIds.filter((function(e){return e!==r})),t.update(a,{habitIds:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var vr=function(e){return xr.apply(this,arguments)},mr=fn.a.mark(gr);function gr(e){var t,n;return fn.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload.habitId,r.next=3,Object(hn.h)(Gn);case 3:return n=r.sent,r.prev=4,r.next=7,Object(hn.f)(R.routines.deleteHabit.request());case 7:return r.next=9,Object(hn.b)(vr,{userId:n,habitId:t});case 9:return r.next=11,Object(hn.f)(R.routines.deleteHabit.success({id:t}));case 11:r.next=18;break;case 13:return r.prev=13,r.t0=r.catch(4),console.error(r.t0),r.next=18,Object(hn.f)(R.routines.deleteHabit.failure(r.t0));case 18:return r.prev=18,r.next=21,Object(hn.f)(R.routines.deleteHabit.fulfill());case 21:return r.finish(18);case 22:case"end":return r.stop()}}),mr,null,[[4,13,18,22]])}var wr=gr;function yr(){return(yr=Object(On.a)(fn.a.mark((function e(t){var n,r,a,c;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,r=t.firstHabitId,a=t.secondHabitId,c=vn.collection("users").doc(n),e.next=4,vn.runTransaction(function(){var e=Object(On.a)(fn.a.mark((function e(t){var n,i,s,o,u;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(c);case 2:if(n=e.sent,(i=n.data())&&i.habitIds.includes(r)&&i.habitIds.includes(a)){e.next=6;break}throw new Error("habit does not exist, cannot move the habit");case 6:return s=Object(Yn.a)(i.habitIds),o=s.indexOf(r),u=s.indexOf(a),s[o]=a,s[u]=r,e.next=13,t.update(c,{habitIds:s});case 13:return e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var kr=function(e){return yr.apply(this,arguments)},Cr=fn.a.mark(Sr);function Sr(e){var t,n,r,a,c;return fn.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.firstHabitId,r=t.secondHabitId,i.next=3,Object(hn.h)(Gn);case 3:return a=i.sent,i.prev=4,i.next=7,Object(hn.f)(R.routines.swapHabit.request());case 7:return i.next=9,Object(hn.b)(kr,{userId:a,firstHabitId:n,secondHabitId:r});case 9:return c=i.sent,i.next=12,Object(hn.f)(R.routines.swapHabit.success({habitIds:c}));case 12:i.next=19;break;case 14:return i.prev=14,i.t0=i.catch(4),console.error(i.t0),i.next=19,Object(hn.f)(R.routines.swapHabit.failure(i.t0));case 19:return i.prev=19,i.next=22,Object(hn.f)(R.routines.swapHabit.fulfill());case 22:return i.finish(19);case 23:case"end":return i.stop()}}),Cr,null,[[4,14,19,23]])}var Ir=Sr,Hr=fn.a.mark(Nr);function Nr(){return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(hn.k)(R.routines.createHabit.TRIGGER,Qn);case 2:return e.next=4,Object(hn.k)(R.routines.updateHabit.TRIGGER,ar);case 4:return e.next=6,Object(hn.k)(R.routines.updateHistory.TRIGGER,ur);case 6:return e.next=8,Object(hn.k)(R.routines.deleteHabit.TRIGGER,wr);case 8:return e.next=10,Object(hn.k)(R.routines.swapHabit.TRIGGER,Ir);case 10:return e.next=12,Object(hn.e)(Or);case 12:case"end":return e.stop()}}),Hr)}var Er=Nr,Ur=fn.a.mark(Rr);function Rr(){var e;return fn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[Kn,Er,E.c],t.next=3,Object(hn.a)(e.map((function(e){return Object(hn.i)(fn.a.mark((function t(){return fn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(hn.b)(e);case 4:return t.abrupt("break",12);case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:t.next=0;break;case 12:case"end":return t.stop()}}),t,null,[[1,7]])})))})));case 3:case"end":return t.stop()}}),Ur)}var Tr=Rr,Dr=function(e){var t=e.initialState,n=void 0===t?{}:t,r=e.history,a=Object(jn.a)(),c=[a,Object(ln.a)(r)],i=Object(N.a)({reducer:{session:Q.reducer,habits:R.reducer,router:Object(dn.b)(r)},middleware:c,preloadedState:n});return a.run(Tr),i},Ar=n(284),Fr=n(148),Gr=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Pr(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Wr=n(32),qr=n(150),Lr=Object(Wr.b)();document.addEventListener("DOMContentLoaded",(function(){var e=Dr({history:Lr});return i.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(T.a,{store:e,children:Object(q.jsx)(qr.a,{options:Fr.a,children:Object(q.jsx)(dn.a,{history:Lr,children:Object(q.jsxs)(se,{children:[Object(q.jsx)(Ar.a,{}),Object(q.jsx)(bn,{})]})})})})}),document.getElementById("root"))})),function(e){if("serviceWorker"in navigator){if(new URL("https://aarronlee.com/simple-habit-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("https://aarronlee.com/simple-habit-tracker","/service-worker.js");Gr?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Pr(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Pr(t,e)}))}}()}},[[227,1,2]]]);
//# sourceMappingURL=main.687bc7b7.chunk.js.map