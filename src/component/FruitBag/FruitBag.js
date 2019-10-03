import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
    Grid,
    Button,
    Typography,
    Paper,
} from '@material-ui/core';

class FruitBag extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_FRUITS',
        });
    }

    render() {
        const bagWrapStyling = {
            padding: '10px',
            backgroundColor: '#f5deb3',
        };
        return (
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={8}>
                    <Paper style={bagWrapStyling}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="h6"
                        >
                            Fruit Bag
                        </Typography>

                        <div>

                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        fullWidth={true}
                        variant="contained"
                        color="primary"
                        onClick={this.onRemoveFruit}
                    >
                        Take Bag
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default connect(mapStoreToProps)(FruitBag);
