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
                           <option value=""> Seleccione una opción </option>
                               <option value="san jose">san jose </option>
                               <option value="san jeronimo">san jeronimo</option>
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
                               <option value="no-binario">No binario</option>
                               <option value="prefiero-no-decirlo">Prefiero no decirlo</option>
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
                        class="button button-primary"
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
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userData = {
            institucion: formData.get("institucion"),
            name: formData.get("name"),
            usuario: formData.get("usuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            activo: formData.get("activo")
        };

        presenter.register(userData);
    });

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message) {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.textContent = message;
    }
}