(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0715409c"],{"7f7f":function(e,t,s){var r=s("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in a||s("9e1e")&&r(a,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"8ce7":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Logo",{attrs:{color:"dark"}}),s("section",{staticClass:"studentLogin"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("h1",{staticClass:"page__heading"},[e._v("Login")]),s("div",{staticClass:"login col-sm"},[s("transition",{attrs:{name:"slide",mode:"in-out"}},[e.error?s("div",{staticClass:"error-message",class:{"bg-danger":e.error}},[e._v(e._s(e.msg))]):e._e()]),s("transition",{attrs:{name:"slide",mode:"in-out"}},[e.success?s("div",{staticClass:"success-message",class:{"bg-success":e.success}},[e._v(e._s(e.msg))]):e._e()]),e.login__form?s("form",[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.login_username,expression:"login_username"}],attrs:{type:"username",placeholder:"Enter your Username"},domProps:{value:e.login_username},on:{input:function(t){t.target.composing||(e.login_username=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.login_password,expression:"login_password"}],attrs:{type:"password",placeholder:"Enter your password"},domProps:{value:e.login_password},on:{input:function(t){t.target.composing||(e.login_password=t.target.value)}}})]),s("router-link",{staticStyle:{"margin-left":"-14rem","font-size":"1.5rem",color:"#000"},attrs:{to:"/student/forgot"}},[e._v("Forget Password?")]),s("button",{staticClass:"btn submit",on:{click:function(t){return t.preventDefault(),e.login(t)}}},[s("i",{staticClass:"material-icons md-48"},[e._v("keyboard_arrow_right")])])],1):s("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"file"}},[e.profilePic?s("span",[e._v(e._s(e.profilePic.name))]):s("span",[e._v("Upload a Profile Pic. CLick Here")])]),s("input",{ref:"myFile",attrs:{type:"file",id:"file",accept:"image/x-png, image/gif, image/jpeg"},on:{change:e.previewFile}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"username",placeholder:"Enter your Username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter your Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Enter you Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Enter your Name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",placeholder:"Enter your Phone No.",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{type:"number",placeholder:"Enter your age",required:""},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],staticClass:"form-group",attrs:{name:"gender",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.gender=t.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:"",disabled:""}},[e._v("Select Gender")]),s("option",{attrs:{value:"Male"}},[e._v("Male")]),s("option",{attrs:{value:"Female"}},[e._v("Female")])])]),e._m(0)])],1),s("div",{staticClass:"col-sm form__switcher",on:{click:e.formChanger}},[e._v(e._s(e.formMsg))])])])])],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"btn submit",staticStyle:{"margin-left":"19rem"}},[s("i",{staticClass:"material-icons md-48"},[e._v("keyboard_arrow_right")])])}],o=(s("7f7f"),s("2241")),i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"btn btn-light text-dark"},[s("a",{staticClass:"row",staticStyle:{"text-transform":"none"},attrs:{href:"/student/auth/google"}},[s("div",{staticClass:"col-sm"},[s("img",{attrs:{width:"40px",alt:'Google "G" Logo',src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"}})]),s("div",{staticClass:"col-sm text-dark"},[e._v("Login with Google")])])])])}],l={methods:{onSignIn:function(){console.log("Signing in")}}},c=l,u=s("2877"),m=Object(u["a"])(c,i,n,!1,null,null,null);m.options.__file="GoogleButton.vue";var p=m.exports,d=s("bc3a"),g=s.n(d),h={data:function(){return{login_username:"",login_password:"",profilePic:"",username:"",password:"",email:"",name:"",age:null,phone:"",gender:"Select Gender",login__form:!0,msg:"",error:!1,success:!1,emailSent:0,formMsg:"Don't Have an account? Join US."}},components:{Logo:o["a"],GoogleButton:p},methods:{formChanger:function(){this.login__form=!this.login__form,this.login__form?this.formMsg="Don't Have an account? Join US.":this.formMsg="Already Have an account. Login!"},removeError:function(){var e=this;setTimeout(function(){e.msg="",e.error=!1},5e3)},createError:function(e){this.error=!0,this.success=!1,this.msg=e,this.removeError()},createSuccess:function(e){this.success=!0,this.error=!1,this.msg=e},sendEmail:function(){var e=this,t=new FormData;t.append("file",this.profilePic),t.append("username",this.username),t.append("password",this.password),t.append("name",this.name),t.append("email",this.email),t.append("phone",this.phone),t.append("age",this.age),t.append("gender",this.gender),g.a.post("/student/verify",t).then(function(t){return e.createSuccess(t.data.msg),!0}).catch(function(t){console.log(t),e.createError("Error Sending Verification Mail")})},validator:function(){var e=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(this.age=parseInt(this.age),e.test(this.email))if(this.password.length>=6)if("number"==typeof this.age&&this.age>0&&this.age<50)if("string"==typeof this.name)if(this.phone.length<=13){if(this.profilePic.size<=16e5&&this.profilePic.size>=50)return!0;this.createError("Profile Pic size must be less than 1.5MB")}else this.createError("Enter Phone no. of 10 Digits with country code");else this.createError("Please enter a valid name with no numbers");else this.createError("Please enter a valid age.");else this.createError("Please enter a strong password with more than six characters");else this.createError("Please enter a valid email")},login:function(){var e=this;this.login_username&&this.login_password?g.a.post("/student/login",{username:this.login_username,password:this.login_password}).then(function(t){e.$router.push("/student/dashboard")}).catch(function(t){console.log(t),e.createError("Unauthorized")}):this.createError("Please enter Username/Password")},signup:function(){this.username&&this.password&&this.name&&this.age&&this.gender&&this.phone?this.validator()&&(this.emailSent<=3?(this.emailSent+=1,this.sendEmail()):this.createError("Too many email sending attempts")):this.createError("Please fill all the fields")},previewFile:function(){this.profilePic=this.$refs.myFile.files[0]}}},f=h,v=(s("d2ee"),Object(u["a"])(f,r,a,!1,null,"316feead",null));v.options.__file="studentLogin.vue";t["default"]=v.exports},aebe:function(e,t,s){},d2ee:function(e,t,s){"use strict";var r=s("aebe"),a=s.n(r);a.a}}]);
//# sourceMappingURL=chunk-0715409c.e75efb59.js.map