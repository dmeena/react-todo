//MAIN COMPONENT
var Main= React.createClass({
  getInitialState: function(){
    return {
      data: []
    }
  },
  handleAddNote: function(data){
    var getState= this.state.data;
    getState.push(data);
    this.setState({data: getState});
  },
  handleDeleteNote: function(data){
     var getState= this.state.data;
     getState.splice(data, 1);
     this.setState({data: getState});
  },
  render: function(){
    return(
      <div className="container">
          <Header/>
          <List onDeleteNote={this.handleDeleteNote} data={this.state.data}/>
          <Add onAddNote={this.handleAddNote}/>
      </div>
    )
  }
});
//HEADER COMPONENT
var Header= React.createClass({
    render: function(){
      return(
        <div className="header">
          TO DO Application
        </div>  
      )
    }
});
//NOTE LIST COMPONENT
var List= React.createClass({
    handleDeleteNote: function(e){
      this.props.onDeleteNote(e.target.getAttribute("data-index"));
    },
    render: function(){
      var prop= this.props.data;
      var ListItem= [];
      if(prop.length==0){
        ListItem.push(
          <p>No note Added</p>
        )
      }
      else{
        for(var i=0; i<prop.length; i++){
          ListItem.push(
            <div className="listItem">
              <p className="liText">{prop[i]}</p>
              <button className="liDelete" data-index={i} onClick={this.handleDeleteNote}>X</button>
            </div>
          )
        }
      }
      return(
        <div className="list">
          {ListItem}
        </div>
      )
    }
});
//ADD A NOTE COMPONENT
var Add= React.createClass({
  handleAddItem: function(){
    var getNode= document.getElementById("note");
    var getValue= getNode.value;
    if(getValue== ""){
      getNode.style.backgroundColor= "red";
    }
    else{
      getNode.style.backgroundColor= "white";
      this.props.onAddNote(getValue);
    }
  },
  componentDidMount: function(){
    console.log("input: ");
  },
  render: function(){
    return(
      <div className="add">
        <input id="note" type="text" placeholder="Enter your text"/>
        <button onClick={this.handleAddItem}>Add</button>
      </div>
    )
  }
});
//RENDER TO DOCUMENT BODY
ReactDOM.render(<Main/>, document.body);
