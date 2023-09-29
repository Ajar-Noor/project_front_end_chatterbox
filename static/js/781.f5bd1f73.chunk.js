"use strict";(self.webpackChunkmychatterbox=self.webpackChunkmychatterbox||[]).push([[781],{6174:function(t,n,e){e.d(n,{h:function(){return c}});var i=e(9439),o=e(2791),r=e(4164),s=e(6117),u=e(2876),a=e(2971),l=e(184);var c=o.forwardRef((function(t,n){var e=t.children,c=t.container,p=t.disablePortal,f=void 0!==p&&p,d=o.useState(null),h=(0,i.Z)(d,2),E=h[0],x=h[1],m=(0,s.Z)(o.isValidElement(e)?e.ref:null,n);if((0,u.Z)((function(){f||x(function(t){return"function"===typeof t?t():t}(c)||document.body)}),[c,f]),(0,u.Z)((function(){if(E&&!f)return(0,a.Z)(n,E),function(){(0,a.Z)(n,null)}}),[n,E,f]),f){if(o.isValidElement(e)){var v={ref:m};return o.cloneElement(e,v)}return(0,l.jsx)(o.Fragment,{children:e})}return(0,l.jsx)(o.Fragment,{children:E?r.createPortal(e,E):E})}))},3967:function(t,n,e){e.d(n,{Z:function(){return s}});e(2791);var i=e(418),o=e(4591),r=e(988);function s(){var t=(0,i.Z)(o.Z);return t[r.Z]||t}},4999:function(t,n,e){e.d(n,{C:function(){return o},n:function(){return i}});var i=function(t){return t.scrollTop};function o(t,n){var e,i,o=t.timeout,r=t.easing,s=t.style,u=void 0===s?{}:s;return{duration:null!=(e=u.transitionDuration)?e:"number"===typeof o?o:o[n.mode]||0,easing:null!=(i=u.transitionTimingFunction)?i:"object"===typeof r?r[n.mode]:r,delay:u.transitionDelay}}},4913:function(t,n,e){function i(t){return t&&t.ownerDocument||document}e.d(n,{Z:function(){return i}})},8252:function(t,n,e){var i;e.d(n,{Z:function(){return a}});var o=e(9439),r=e(2791),s=0;var u=(i||(i=e.t(r,2)))["useId".toString()];function a(t){if(void 0!==u){var n=u();return null!=t?t:n}return function(t){var n=r.useState(t),e=(0,o.Z)(n,2),i=e[0],u=e[1],a=t||i;return r.useEffect((function(){null==i&&u("mui-".concat(s+=1))}),[i]),a}(t)}},6752:function(t,n,e){e.d(n,{ZP:function(){return x}});var i=e(3366),o=e(4578),r=e(2791),s=e(4164),u=!1,a=e(5545),l="unmounted",c="exited",p="entering",f="entered",d="exiting",h=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var o,r=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?r?(o=c,i.appearStatus=p):o=f:o=n.unmountOnExit||n.mountOnEnter?l:c,i.state={status:o},i.nextCallback=null,i}(0,o.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===l?{status:c}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==p&&e!==f&&(n=p):e!==p&&e!==f||(n=d)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!==typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this);e&&function(t){t.scrollTop}(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[s.findDOMNode(this),i],r=o[0],a=o[1],l=this.getTimeouts(),c=i?l.appear:l.enter;!t&&!e||u?this.safeSetState({status:f},(function(){n.props.onEntered(r)})):(this.props.onEnter(r,a),this.safeSetState({status:p},(function(){n.props.onEntering(r,a),n.onTransitionEnd(c,(function(){n.safeSetState({status:f},(function(){n.props.onEntered(r,a)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:s.findDOMNode(this);n&&!u?(this.props.onExit(i),this.safeSetState({status:d},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],r=o[0],u=o[1];this.props.addEndListener(r,u)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===l)return null;var n=this.props,e=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(a.Z.Provider,{value:null},"function"===typeof e?e(t,o):r.cloneElement(r.Children.only(e),o))},n}(r.Component);function E(){}h.contextType=a.Z,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},h.UNMOUNTED=l,h.EXITED=c,h.ENTERING=p,h.ENTERED=f,h.EXITING=d;var x=h}}]);
//# sourceMappingURL=781.f5bd1f73.chunk.js.map