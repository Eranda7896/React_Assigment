import {Component,Fragment} from "react";
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import GDSEButton from "../../compenet/common/Button";

class Registation extends Component{
    render() {
        return(
            <Fragment>
                <h1>User Registration</h1>
                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container className="pt-2" spacing={3} >
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="First Name" label="First Name" variant="outlined"
                                           size="small" style={{width: '100%'}}
                                /*value={this.state.formData.title}
                                onChange={(e) => {
                                    let formData=this.state.formData;
                                    formData.title = e.target.value;
                                    this.setState({formData});
                                }}*/
                                           validators={['required', 'isString']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Last Name" label="Last Name"
                                           variant="outlined" size="small" style={{width: '100%'}}
                                /*value={this.state.formData.price}
                                onChange={(e) => {
                                    let formData=this.state.formData;
                                    formData.price = e.target.value;
                                    this.setState({formData});
                                }}*/
                                           validators={['required', 'isString']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Email" label="Email"
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

                            <TextValidator id="outlined-basic" placeHolder="User Name" label="User Name"
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

                            <TextValidator id="outlined-basic" placeHolder="Password" label="Password"
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

                            <TextValidator id="outlined-basic" placeHolder="City" label="City"
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

                            <TextValidator id="outlined-basic" placeHolder="Street" label="Street"
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

                            <TextValidator id="outlined-basic" placeHolder="Street No" label="Street No"
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

                            <TextValidator id="outlined-basic" placeHolder="Zip Code" label="Zip Code"
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

                            <TextValidator id="outlined-basic" placeHolder="Mobile No" label="Mobile No"
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

export default Registation;