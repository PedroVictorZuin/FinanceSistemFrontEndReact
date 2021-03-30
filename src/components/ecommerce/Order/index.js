import React from 'react';
import { transpileModule } from 'typescript';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



export const StepOne = ()=>{
    return(
        <form>
            <div>
                <TextField
                error={false}
                id="standard-error-helper-text"
                label="CEP"
                defaultValue=""
                helperText=""
                />
            </div>
        </form>
    )
}