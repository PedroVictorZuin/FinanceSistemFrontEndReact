import React , {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask'


function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }
  

const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
  });

export const PaymantMethod = ()=>{
    const changeOptions = (ev)=>{
        setShowPanel(ev.target.value)
    }

    const [showPanel , setShowPanel] = useState('none')



    return(
        <form style={{border : "1px solid darkslategray" , padding : "10px" , borderRadius : "10px"}}>
            <div className="row col-md-12">
                <div className="col-md-4"></div>
                <div className="col-md-4" style={{backgroundColor : "whitesmoke"}}>
                    Selecione a Forma de Pagamento
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row col-md-12 mt-4" >
                <div className="col-md-6">
                    <FormControl component="fieldset">
                        <RadioGroup defaultValue="pagamentos" aria-label="gender" name="customized-radios">
                            <FormControlLabel onChange={changeOptions} value="cartDebido" control={<StyledRadio />} label="Cartão de Debito" />
                            <FormControlLabel onChange={changeOptions} value="cartCredito" control={<StyledRadio />} label="Cartão de Crédito" />
                            <FormControlLabel onChange={changeOptions} value="boleto" control={<StyledRadio />} label="Boleto Bancário" />
                            <FormControlLabel onChange={changeOptions} value="qrcode" control={<StyledRadio />} label="QR-Code" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="col-md-6">
                    <div style={{display : showPanel === "cartDebido" ? "block" : 'none'}}>
                        <div className="row col-md-12 mt-4">
                            <div className="col-md-6">
                                <TextField
                                    error={false}
                                    id="standard-error-helper-text"
                                    label="Numero do Cartão"
                                    name="CEP"
                                    defaultValue=""
                                    helperText=""
                                    >
                                        <InputMask mask="99999-999" maskChar=" " />
                                </TextField>
                            </div>
                            <div className="col-md-6">
                                <TextField
                                    error={false}
                                    id="standard-error-helper-text"
                                    label="Digito"
                                    name="CEP"
                                    defaultValue=""
                                    helperText=""
                                    >
                                        <InputMask mask="99999-999" maskChar=" " />
                                </TextField>
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <FormControl style={{display:"inline"}} component="fieldset">
                                <RadioGroup defaultValue="pagamentos" aria-label="gender" name="customized-radios">
                                    <FormControlLabel value="cartDebido" control={<StyledRadio />} label="MASTECARD" />
                                    <FormControlLabel value="cartCredito" control={<StyledRadio />} label="ELO" />
                                    <FormControlLabel value="boleto" control={<StyledRadio />} label="VISA" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div style={{display : showPanel === "cartCredito" ? "block" : 'none'}}>TESTECREDITO</div>
                    <div style={{display : showPanel === "boleto" ? "block" : 'none'}}>TESTEBOLETO</div>
                    <div style={{display : showPanel === "qrcode" ? "block" : 'none'}}>TESTEQRCODE</div>
                </div>
            </div>
        </form>
    )


}