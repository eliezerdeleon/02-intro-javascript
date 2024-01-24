const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 553232,
        lat: 14.3232,
        lng: 34.923454
    }
    
    };
    
    //console.table(persona);
    
    const persona2 = {...persona};
    persona2.nombre = 'Peter';
    
    console.log(persona);
    console.log(persona2);
    