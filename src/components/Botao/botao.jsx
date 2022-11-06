import { Botao } from "./botao.js"

export const Botao = (props) => {
    return (
      <Botao
        fontSize={props.fontSize}
        backgroundColor={props.backgroundColor}
        onClick={props.onClick}
        width={props.width}
        height={props.height}
        borderradius={props.borderradius}
        colorText={props.colorText}
        textalign={props.textalign}

      >
        {props.name}
      </Botao>
    );
  };
  