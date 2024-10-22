import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  type: "from" | "to";
  loading?: boolean;
  onchage: (value: string) => void;
  value: string;
}

export const TextArea = ({ type, value,loading, onchage }: Props) => {
    const getPlaceholder = ({type,loading}:{type:'from'|'to',loading?:boolean})=>{
        if (type === 'from') return 'Introducir texto'
        if ( loading === true) return 'Cargando ...'
        return 'Traduccion'
    }
    const handleChange =(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        onchage(event.target.value)
    }
  return (
    <Form.Control
      autoFocus={type === 'from'}
      as="textarea"
      placeholder={getPlaceholder({type,loading})}
      style={{ height: "150px" }}
      value={value}
      onChange={handleChange}
    ></Form.Control>
  );
};
