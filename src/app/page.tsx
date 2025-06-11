"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { DivideCircle } from "lucide-react";


export default function Home() {

  const {data: session} = authClient.useSession();
  
  const [email , setEmail] = useState("");
  const [name , setName] = useState("");
  const [password , setPassword] = useState("");

  const onSubmit =  () => {
    authClient.signUp.email({
      email,
      name,
      password,
    },{
      onError:()=>{
        window.alert("Error")
      },
      onSuccess:()=>{
        window.alert("Success")
      }
    });
  }
  const onLogin =  () => {
    authClient.signIn.email({
      email,
     
      password,
    },{
      onError:()=>{
        window.alert("Error")
      },
      onSuccess:()=>{
        window.alert("Success")
      }
    });
  }
  if(session) {
    return (
      <div className="flex flex-col gap-4 py-4">
        <h1>Welcome {session.user.name}</h1>
        <Button onClick={()=>authClient.signOut()}>Sign Out</Button>
      </div>
    )
  }
  return (
   <div className="flex flex-col gap-4 py-4">
  <div className="flex flex-col gap-4 py-4">
      <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onSubmit}>Create User</Button>
  </div>
      <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onLogin}>Login</Button>
     
  </div>
  
  );
}
