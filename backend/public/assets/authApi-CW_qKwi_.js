import{n as t}from"./index-CrXW60Oy.js";const c=async({email:r,password:a})=>{try{return(await t("users/login",{method:"POST",data:{email:r,password:a}})).data.data.user}catch(s){throw new Error(s.response.data.message)}},d=async({username:r,email:a,password:s,confirmPassword:o})=>{try{return(await t("users/signup",{method:"POST",data:{username:r,email:a,password:s,confirmPassword:o}})).data.data.user}catch(e){throw new Error(e.response.data.message)}},u=async()=>{try{return await t("users/logout",{method:"POST"}),null}catch(r){throw new Error(r.response.data.message)}};export{c as a,u as l,d as s};
