import React from "react"

class PageChange extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page: props.page
        };

    }
    handleNextPage(){
        this.setState({
            page: this.state.page + 1
        })
        this.props.onPageChange(this.state.page + 1)
      }

      handlePrevPage(){
        this.setState({
            page: this.state.page - 1
        })
        this.props.onPageChange(this.state.page - 1)
      }

    render(){
        console.log(this.state.page)
        if(this.state.page != 1){
            return (
                <div>
                    <button className ="nextbutton" onClick={()=> this.handlePrevPage()}> previous page </button>
                    <button className ="nextbutton" onClick={()=> this.handleNextPage()}> next page </button>
                </div>

            )
        }
        else{
            return(
                <div>
                    <button className ="nextbutton" onClick={()=> this.handleNextPage()}> next page </button>

                </div>
            )
        }
    }
}

export default PageChange