/*
 * User Entity
 *
 * Representa un usuario dentro del dominio
 * de la aplicación.
 *
 * Esta clase NO sabe:
 * - cómo se guarda el usuario
 * - dónde se guarda
 * - cómo funciona Firestore
 * - cómo funciona LocalStorage
 * - cómo funciona la interfaz
 */

export class User {

    constructor({
        id = null,
        institucion,
        name,
        usuario,
        genero,
        email,
        passwordHash = null,
        activo
    }) {
        this.id = id;
        this.institucion = institucion;
        this.name = name;
         this.usuario = usuario;
        this.genero = genero;
        this.email = email;
        this.passwordHash = passwordHash;
        this.activo = activo;
    }

}