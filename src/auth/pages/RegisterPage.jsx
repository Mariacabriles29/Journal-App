
import { Button, Grid, TextField, Typography,Link} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
email:'mcabriles29@gmail.com',
password:'123456',
displayName:'Maria Cabriles'

}

export const RegisterPage = () => {
  const {displayName,email, password, onInputChange, formState} = useForm(formData);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);

  }
  return (
    <AuthLayout title="Login">
    <form onSubmit={onSubmit}>
      <Grid container>
      <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre completo"
            type="name"
            placeholder="Nombre completo"
            fullWidth
            name="displayName"
            value={displayName}
            onChange={onInputChange}
          />
      </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
          />
      </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>

          <Grid item xs={12} sm ={6}>
            <Button  type="submit"  variant="contained" fullWidth >
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='end'>
          <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
          <Link component={RouterLink} color='inherit' to="/auth/login">ingresar</Link>
            

        </Grid>
      </Grid>
    </form>

</AuthLayout>
  )
}
