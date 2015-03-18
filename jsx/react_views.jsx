jb.views={};

(function(views){

  var PageOne = React.createClass({
    render: function() {
      return <div class="showing">Page One (1)</div>
    }
  });

  var PageTwo = React.createClass({
    render: function() {
      return <div class="showing">Page Two (2)</div>
    }
  });

  var PgView = React.createClass({

    getView: function(show) {
      if (show === "one") {
        return <PageOne/>
      }
      else if (show === "two") {
        return <PageTwo/>
      }
    },

    onNav: function(show){
      this.props.onShow(show);
    },

    render: function() {
      var showing = this.getView(this.props.show);
      return (
        <div>
          <div>
            <button onClick={this.onNav.bind(this,"one")}>Page One</button>
            <button onClick={this.onNav.bind(this,"two")}>Page Two</button>
          </div>
          <div class="showing">{showing}</div>
        </div>
      );
    }

  });

  // $(function(){

  //   window.page = React.render(<PgView show ="one"/>, document.body);
  // });
  views.PgView = PgView;

})(jb.views);

// //------ Side Notes ------//

// // function MyFunc(param) {
// //   alert(param);
// // }(1);//one if put in where it says param

// // (function($){
//   //allows you to write code in here with $
//   //rest of the world sees it as jquery
// // })(jquery);//jquery is now the $

// //------------------------//


// jb.views= {};

// (function(views){

//   // var Panel = React.createClass({

//   //   render: function(){
//   //     return (
//   //       <div className="panel">
//   //         <div className="panel-header">{this.props.header}</div>
//   //         <div className="panel-content">{this.props.children}</div>
//   //       </div>
//   //     );
//   //   }

//   // });

//   // var MyPanel = React.createClass({
//   //   render: function() {
//   //   return <Panel header="My Panel"><p>This is my content</p></Panel>;
//   //   }
//   // })

// var Foo = React.createClass({
//   render: function() {
//     return <div>Foo</div>
//   }
// });

// var Bar = React.createClass({
//   render: function() {
//     return <div>Bar</div>
//   }
// });

// var Root = React.createClass({
   
//     getView: function(show) {
//       if (show === "foo") {
//         return <Foo/>
//       }
//       else if (show ==="bar"){
//         return <Bar/>
//       }
//     },

//     onNav: function(show) {
//       this.props.onShow(show);
//     },

//     render: function(){
//       var showing = this.getView(this.props.show);
//       return (
//         <div>
//           <div>
//             <button onClick={this.onNav.bind(this,"foo")}>Foo</button>
//             <button onClick={this.onNav.bind(this,"bar")}>Bar</button>
//           </div>
//           <div>{showing}</div>
//         </div>
//       );
//     }

// });
//   // $(function(){

//   //   window.root = React.render(<Root show="foo"/>,document.body);

//   // });

//   // ns.Panel = Panel;
//   views.Root = Root;

// })(jb.views);

    //root.setProps({show:"bar"}); to test

//when button is clicked we want onNav ="foo" or "bar" 
//so we bind it so that value is attached as the parameter

//-----------

//by putting everything in a function you can lockdown Panel so that it is hidden
//ns.Panel = Panel;
  //by setting Panel on the namespace it is exposed so it can be used elsewhere
// })(jb.views); is calling that function
  //jb.views now replaces ns.Panel outside of the function