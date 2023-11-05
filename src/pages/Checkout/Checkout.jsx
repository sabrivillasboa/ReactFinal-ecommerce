import React from "react";
import { TextField, Box, Button} from "@mui/material";
import { useState } from "react";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");

    const capturarNombre=(e) =>{
        setNombre(e.target.value)
    };

    const capturarApellido=(e) =>{
        setApellido(e.target.value)
    };

    const capturarEmail=(e) =>{
        setEmail(e.target.value)
    };
    //SE PUEDE REFACTORIZAR LOS ESTADOS Y LAS FUNCIONES A UNA SOLA PARA TODO.
    //LA FUNCION QUE MANEJA EL ONCHANGE SE LLAMA HANDLECHANGE.

    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log(nombre);
        console.log(apellido);
        console.log(email);
        
    }
    
    return (
        <div style={{display:"flex", height:"90vh", flexDirection:"column"}}>
        <h2>Checkout</h2>
        <Box component="form"
            onSubmit={handleSubmit}
            >
            <TextField
            id="nombre"
            label="nombre"
            type="text"
            onChange={capturarNombre}
            autoComplete="off"
            variant="outlined"
            value={nombre}
            name="nombre"
        />
        <TextField
            id="apellido"
            label="apellido"
            type="text"
            onChange={capturarApellido}
            autoComplete="off"
            variant="outlined"
            value={apellido}
            name="apellido"
        />
        <TextField
            id="email"
            label="email"
            type="email"
            onChange={capturarEmail}
            variant="outlined"
            value={email}
            name="email"
        />
        <Button variant= "contained" type="submit" >Enviar</Button>
        </Box>
        </div>
    );
};

export default Checkout;

