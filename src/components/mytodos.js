import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AlertDialog from './alert.js';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';






const styles = {
    buttons1:{
        marginLeft :200,
        marginTop : 50
    },

    buttons3:{
        marginLeft : 50,
        marginTop : 50
    },

    buttons2:{
        marginLeft : 100,
        marginTop : 50
    },

    input:{
        marginLeft : 100,
        marginTop : 50,
        width : 1000

    }



}




class MyTodos extends Component {

    state = {

        mytodos : [],
        text : '',
        name : false,
        value: 'recents',
        dialogue : true

    }

    constructor (props){
        super (props)
    }

    handleAddTodo = ()=>{
        if (this.state.text === "" ){
            return (
              this. setState ({dialogue : false})

            ) ;

            }


        else {
            this. setState ({dialogue : true})
            var todos = this.state.mytodos;
            todos.push(this.state.text);
            this.setState({mytodos: todos, text: ""})
            this.state.name = false;
        }



    }


    handleRemoveTodo (i) {

        var todos = this.state.mytodos;
        todos.splice(i , 1);
        this.setState ({mytodos : todos})
    }



    handleChangeText=(e)=> {

        this.setState({[e.target.name] :  e.target.value})
    }


    handleEditText (i) {
        var todos = this.state.mytodos;
        var edit = todos.slice(i,i+1);
        this.setState({text : edit});
        this.state.name = true;
        console.log(edit);


    }








    render(){
        return(
            <div>

                <div>{this.state.dialogue === false ? <AlertDialog/> : this.handleAddTodo }</div>
                <AppBar position="static">
                    <Toolbar>

                        <Typography variant="h6" color="inherit" >
                            Todo app
                        </Typography>

                    </Toolbar>
                </AppBar>

                <TextField

                    id="standard-required"
                    label="add a todo"
                    margin="normal"
                    name="text"
                    value = {this.state.text}
                    onChange = {this.handleChangeText}
                    style = {styles.input}



                    />



                <Button variant="contained" color="secondary" style = {styles.buttons2} onClick = {this.handleAddTodo}>
                    {this.state.name===false ? "add": "save"}
                </Button>

                <TableBody>
                    {this.state.mytodos.map((v,i)=>{
                        return(
                            <TableRow key= {i}>
                                <TableCell align="right">{i+1}</TableCell>
                                <TableCell component="th" scope="row">
                                    {v}
                                </TableCell>
                                <TableCell align="right">
                                    <Fab  aria-label="Delete" style = {styles.buttons1}  onClick = {this.handleRemoveTodo.bind(this ,i)} >
                                        <DeleteIcon />
                                    </Fab>

                                </TableCell>
                                <TableCell align="right">
                                    <Fab color="secondary" aria-label="Edit"  style = {styles.buttons3}   onClick = {this.handleEditText.bind(this,i)}>
                                        <Icon>edit_icon</Icon>
                                    </Fab>

                                </TableCell>

                            </TableRow>)
                    })}
                </TableBody>











            </div>
        )
    }

}






export default MyTodos;
