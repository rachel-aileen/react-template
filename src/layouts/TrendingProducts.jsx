import { Grid } from '@mui/material'
import React from 'react'

export default function TrendingProducts() {
    return (
        <div className='trendingProducts'>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >

                <Grid item
                    xs={2}>
                    <img className='productImg' src="https://images.unsplash.com/photo-1512311734173-51a49c854e78?q=80&w=2520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Grid>

                <Grid item
                    xs={2}>
                    <img className='productImg' src="https://images.unsplash.com/photo-1512311734173-51a49c854e78?q=80&w=2520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Grid>

                <Grid item
                    xs={2}>
                    <img className='productImg' src="https://images.unsplash.com/photo-1512311734173-51a49c854e78?q=80&w=2520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Grid>

                <Grid item
                    xs={2}>
                    <img className='productImg' src="https://images.unsplash.com/photo-1512311734173-51a49c854e78?q=80&w=2520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Grid>



            </Grid>


        </div>
    )
}
