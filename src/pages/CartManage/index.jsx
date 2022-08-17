import {Component, Fragment} from "react";
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../compenet/common/Button";

class Cart extends Component{
    render() {

        const {classes} = this.props;

        const top100Films = [
            { label: 'The Shawshank Redemption', year: 1994 },
            { label: 'The Godfather', year: 1972 },
            { label: 'The Godfather: Part II', year: 1974 },
            { label: 'The Dark Knight', year: 2008 },
        ]

        return(
            <Fragment>
                <h1>Cart Manage Form</h1>
                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container className="pt-2" spacing={3} >

                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                size="small"
                                style={{width: '100%'}}
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="User Name" />}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Date" label="Date"
                                           variant="outlined" size="small" style={{width: '100%'}}
                                /*value={this.state.formData.description}
                                onChange={(e) => {
                                let formData=this.state.formData;
                                formData.description = e.target.value;
                                this.setState({formData});
                                }}*/
                                           validators={['required', 'isString']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                size="small"
                                style={{width: '100%'}}
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Product Title" />}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Qty" label="Qty"
                                           variant="outlined" size="small" style={{width: '100%'}}
                                /*value={this.state.formData.description}
                                onChange={(e) => {
                                    let formData=this.state.formData;
                                    formData.description = e.target.value;
                                    this.setState({formData});
                                }}*/
                                           validators={['required', 'isString']}
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6} style={{display: 'flex'}} justifyContent={"flex-end"}>
                            <GDSEButton variant="contained" label="Clear"
                                       onClick={() => {

                                       }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{display: 'flex'}} justifyContent={"flex-end"}>
                            <GDSEButton variant="contained" label="Save"
                                       onClick={() => {

                                       }}
                            />
                        </Grid>

                    </Grid>

                </ValidatorForm>
            </Fragment>
        )
    }
}

export default Cart;