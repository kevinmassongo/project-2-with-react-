import { useState } from 'react'
import { useForm } from 'react-hook-form'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //state
  const [formData, setFormData] = useState({
    name : "",
    phone : "",
    email : "",
    age : 18,
    gender : ""
  })

  const {
    register,
    handleSubmit,
    formState : { errors },
  } = useForm({ defaultValues : formData})

  //comportements
  const onSubmit = (data) => {
    console.log(data);
    alert(`l'utilisateur ${data.name} ${data.gender === "femme" ? "enregistrée" : "enregistré"}`)
  }
  
  //affichage
  return (
    <>
      <div>
        <h1>Contact form</h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Nom</label> 
              <input type="text" name='name' {...register("name",{
                required : "Ce champ est requis"
              })}/>
              {errors.name && (
                <span style={{color:"red"}}>
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label>Telephone</label> 
              <input type="text" name='phone' {...register("phone", {
                required : "Ce champ est obligatoire",
                pattern : {
                  value : /^[0-9]{10}$/i,
                  message : "Ce champ n'est pas au bon format"
                }
              })}/>
              {errors.phone && (
                <span style={{color:"red"}}>
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div>
              <label>Email</label> 
              <input type="email" name='email' {...register("email",{
                required : "Ce champ est requis"
              })}/>
            </div>
            <div>
              <label>Age</label> 
              <input type="number" name='age' {...register("age",{
                required : "Ce champ est requis"
              })}/>
            </div>
            <div>
              <label>Genre</label> 
              <select {...register("gender")}>
                <option value="femme">Femme</option>
                <option value="homme">Homme</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <button type='submit'>Enregistrer</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
