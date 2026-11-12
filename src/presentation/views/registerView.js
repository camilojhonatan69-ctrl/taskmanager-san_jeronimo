/*
 * Register View
 *
 * Responsabilidad:
 * - Mostrar la interfaz de registro.
 * - Capturar las acciones del usuario.
 * - Informar esas acciones al Presenter.
 *
 * NO contiene lógica de registro.
 */

export function showRegisterView(container, presenter) {
    container.innerHTML = `
        <section class="auth-container">
            <div class="auth-card">

                <header class="auth-header">
                    <h1>Crear cuenta</h1>
                    <p>Regístrate para comenzar</p>
                </header>


                     <form id="register-form" class="auth-form">

                       <div class="form-group">
                        <label for="register-institucion">
                            indique su institucion
                        </label>

                        <select
                        
                            id="register-institucion"
                            name="institucion"
                            required
                        >
                           <option value=""> Seleccione una opción
                             </option>
                               <option value="san jose">san jose
                                </option>
                               <option value="san jeronimo">san jeronimo
                               </option>
                               <option value="otros">otros</option>
                               
                         </select>

                    </div>

                    <div class="form-group">
                        <label for="register-name">
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="register-name"
                            name="name"
                            placeholder="Tu nombre"
                            required
                        >


                    <div class="form-group">
                        <label for="register-usuario">
                            indique su usuario
                        </label>

                        <select
                        
                            id="register-usuario"
                            name="usuario"
                            required
                        >
                           <option value=""> Seleccione una opción </option>
                               <option value="estudiante">estudiante</option>
                               <option value="docente">docente</option>
                               <option value="otros">otros</option>
                              
                         </select>

                    </div>


                    <div class="form-group">
                        <label for="register-genero">
                            indique su genero
                        </label>

                        <select
                        
                            id="register-genero"
                            name="genero"
                            required
                        >
                           <option value=""> Seleccione una opción </option>
                               <option value="masculino">Masculino</option>
                               <option value="femenino">Femenino</option>
                               <option value="Otros">Otros</option>
                         </select>

                    </div>


                    <div class="form-group">
                        <label for="register-email">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-password">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="Crea una contraseña"
                            required
                        >
                    </div>

                   <div class="form-group">
                       <label for="register-activo">
                         <input
                         type="checkbox"
                         id="register-activo"
                         name="activo"
                         value="activo"
                         checked
                         >
                         Activo
                       </label>
                   </div>

                    <button
                        type="submit"
                        class="btn btn-success"
                    >
                        Crear cuenta 
                    </button>

                </form>

                <div class="auth-footer">

                    <p>¿Ya tienes una cuenta?</p>

                    <button
                        id="show-login"
                        class="button button-link"
                        type="button"
                    >
                        Iniciar sesión
                    </button>

                </div>

                <p
                    id="register-message"
                    class="form-message"
                ></p>

              </div>
                          

                 <!-- Modal -->
                 <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                 <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Registro usuarios</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <p><strong> Institucion Edicativa</strong><spam id="confirmIE"></spam></p>
                    <p><strong> nombre</strong><spam id="confirmnombre"></spam></p>
                    <p><strong> usuario</strong><spam id="confirmusuario"></spam></p>
                    <p><strong> genero</strong><spam id="confirmgenero"></spam></p>
                    <p><strong> email</strong><spam id="confirmemail"></spam></p>
                    <p><strong> password</strong><spam id="confirmcontrasena"></spam></p>
                    <p><strong> </strong><spam id="confirmestado"></spam></p>

                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" id="btnconfirmar" class="btn btn-primary">confirmar</button>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);
        const modelElement=document.getElementById("staticBackdrop");
        const modal=new bootstrap.Modal(modelElement);
        const userData = {
            institucion: formData.get("institucion"),
            name: formData.get("name"),
            usuario: formData.get("usuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            activo: formData.get("activo")
        };

       document.getElementById("confirmIE").textContent= userData.institucion;
       document.getElementById("confirmnombre").textContent= userData.name;
       document.getElementById("confirmusuario").textContent= userData.usuario; 
       document.getElementById("confirmgenero").textContent= userData.genero;
       document.getElementById("confirmemail").textContent= userData.email;
        document.getElementById("confirmcontrasena").textContent= "*****";
        document.getElementById("confirmestado").textContent= userData.activo;
        
        registerForm.dataset.userData=JSON.stringify(userData);
        
        modal.show();
        
       
    });

     document.getElementById("btnconfirmar").addEventListener("click", () => {
     const userData1=JSON.parse(registerForm.dataset.userData);

     presenter.register(userData1);
     const modalId=document.getElementById("staticBackdrop");
     const modal=bootstrap.Modal.getOrCreateInstance(modalId);
     modal.hide();
     
    });
    const loginButton =
        document.getElementById("show-login");

     loginButton.addEventListener("click", () => {
     
        presenter.showLogin();
     
    
    });
}

export function showRegisterMessage(message,  alert = "success") {
    const messageElement = 
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.innerHTML = `
         <div class="alert alert-${alert}" role="alert">
           ${message}
         </div>
       `;  
    }
}