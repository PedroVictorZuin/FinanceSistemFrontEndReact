import React, { useEffect, useState } from 'react';
import { transpileModule } from 'typescript';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputMask from 'react-input-mask'
import { MDBSelect } from 'mdbreact';
import { makeStyles } from '@material-ui/core/styles';
import ServiceCep from '../../../services/serviceCep'
import {ConsultaCidadesPorEstados , ConsultaEstadosBrasileiros} from '../../../services/serviceEstadosLocalidades'


export const StepOne = ()=>{


    useEffect(()=>{
        ConsultaEstadosBrasileiros()
        .then(response => setEstadosBrasileiros(response))
        .catch(err => console.log(err))
    },[])

    const [EstadosBrasileiros , setEstadosBrasileiros] = useState([])
    const [CidadesDosEstadosBrasileiros , setCidadesDosEstadosBrasileiros] = useState([])


    const [fieldsForm , setValueFieldsForm] = useState({
        CEP : '',
        RUA : '',
        BAIRRO : '',
        NUMERO : '',
        COMPLEMENTO : '',
        ESTADO : "",
        CIDADE : "",
    })

    const handleChange = (event) => {
        const name = event.target.name;
        setValueFieldsForm({
          ...fieldsForm,
          [name]: event.target.value,
        });
      };



    const cervicecep = new ServiceCep()


    const consultaCEP = (ev)=>{
        cervicecep.consultaCEP(ev.target.value)
        .then((response)=>{
            console.log(response)
            ConsultaCidadesPorEstados(response.uf).then(responseTwo => {
                setCidadesDosEstadosBrasileiros(responseTwo)
                setValueFieldsForm({
                    BAIRRO : response.bairro,
                    RUA : response.logradouro,
                    ESTADO : response.uf,
                    CIDADE : response.localidade
                })
            })
        })
        .catch((err)=>{console.log(err)})
    }

    return(
        <form style={{padding : 10 , border : "1px solid darkslategray" , borderRadius : "10px"}}>
            <div className="row md-12 mt-4" >
                    <div className="col-md-3 mt-4">
                        
                    </div>
                    <div className="col-md-6 mt-4">
                        <h3>Dados de Envio</h3>
                        <label>Nos ajude a enviar o mais rápido possível até você</label>
                    </div>
                    <div className="col-md-3 mt-4">
                    </div>
            </div>
            <div className="row md-12 mt-4">
                <div className="col-md-4 mt-4">
                    <TextField
                    error={false}
                    id="standard-error-helper-text"
                    label="CEP"
                    name="CEP"
                    onChange={handleChange}
                    onBlur={consultaCEP}
                    defaultValue=""
                    value={fieldsForm.CEP}
                    helperText=""
                    >
                        <InputMask mask="11111-111" maskChar=" " />
                    </TextField>
                </div>
                <div className="col-md-6 mt-4 "
                >
                    <TextField
                    error={false}
                    style={{width:"100%"}}
                    id="standard-error-helper-text"
                    label="RUA"
                    name="RUA"
                    onChange={handleChange}
                    value={fieldsForm.RUA}
                    defaultValue=""
                    helperText=""
                    />
                </div>
                <div className="col-md-2 mt-4">
                    <TextField
                    error={false}
                    id="standard-error-helper-text"
                    label="NUMERO"
                    name="NUMERO"
                    onChange={handleChange}
                    defaultValue=""
                    helperText=""
                    />
                </div>
            </div>
            <div className="row md-12 mt-4">
                <div className="col-md-3 mt-4">
                    <TextField
                    error={false}
                    id="standard-error-helper-text"
                    label="BAIRRO"
                    defaultValue=""
                    name="BAIRRO"
                    onChange={handleChange}
                    value={fieldsForm.BAIRRO}
                    helperText=""
                    />
                </div>
                <div className="col-md-3 mt-4">
                    <TextField
                    error={false}
                    id="standard-error-helper-text"
                    label="COMPLEMENTO"
                    defaultValue=""
                    helperText=""
                    />
                </div>
                <div className="col-md-3 mt-4">
                    <InputLabel id="demo-controlled-open-select-label">Estado</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        placeholder="Selecione o Estado"
                        style={{width:"100%"}}
                        id="demo-simple-select"
                        name="ESTADO"
                        onChange={handleChange}
                        value={fieldsForm.ESTADO}
                        >
                            {
                                EstadosBrasileiros.map((index)=>{
                                    return ( <MenuItem value={index.sigla}>{index.nome}</MenuItem> )
                                })
                            }

                        
                    </Select>
                </div>
                <div className="col-md-3 mt-4">
                    <InputLabel id="demo-controlled-open-select-label">Cidade</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        style={{width:"100%"}}
                        placeholder="Selecione a Cidade"
                        id="demo-simple-select"
                        name="CIDADE"
                        onChange={handleChange}
                        value={fieldsForm.CIDADE}
                        >
                             {
                                CidadesDosEstadosBrasileiros.map((index)=>{
                                    return ( <MenuItem value={index.nome}>{index.nome}</MenuItem> )
                                })
                            }

                    </Select>
                </div>
            </div>
        </form>
    )
}