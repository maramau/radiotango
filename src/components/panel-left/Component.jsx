import './styles.css';

const PanelLeft = (props) => {
  return (
    <div id="panel-left">
        <div className="but-close">X</div>
        {props.content}
    </div>
  );
}

export default PanelLeft;