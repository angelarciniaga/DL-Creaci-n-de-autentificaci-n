<template>
  <div class="container mt-5">
    <h1>Registro de Usuario</h1>
    <div>
      <b-form @submit.prevent="login">
        <b-form-group
          id="input-group-1"
          label="Correo electronico"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Ingresa Correo"
          ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-2"
            label="Nombre: "
            label-for="input-2"
        >
            <b-form-input
                id="input-2"
                v-model="form.name"
                type="text"
                required
                placeholder="Ingresa nombre"
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="input-group-3"
            label="Clave: "
            label-for="input-3"
        >
            <b-form-input
                id="input-3"
                v-model="form.clave"
                type="password"
                required
                placeholder="Ingresa tu clave"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Registrar</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        clave: '',
        name: ''
      }
    }
  },
  methods: {
    login(){
      if (this.form.email && this.form.clave && this.form.clave.length >= 6) {
        console.log('Entro');
        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.clave)
          .then(resp => {
            console.log(resp.user.photoURL);
            console.log(resp.user.photoNumber);
            console.log(resp.user.displayName);
            console.log(resp.user.email);
            console.log(resp.user.emailVerified);
            console.log(resp.user.isAnonymous);
            console.log(resp.user.metadata.creationTime);
            console.log(resp.user.metadata.lastSignInTime);
            console.log(resp.user.refreshToken);
            console.log(resp.user.uid);
            this.$router.push('/')
          })
          .catch(error => {
            if (error.code == 'auth/wrong-password') {
              this.errores(error)
              
            } else if(error.code == 'auth/invalid-email') {
              this.errores(error)
            } else if(error.code == 'auth/user-disabled') {
              this.errores(error)
            }else {
              this.errores(error);
              
            }
          })
        
      }else{
        console.log('No se puede conectar');
      }
    },
     errores(error){
      this.$notify.error({
        title: 'Error',
        message: `${error.message}`
      })
    }
  }
}
</script>