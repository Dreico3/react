import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import React from "react";
import { FromLanguage, Language } from "../types";
//interesante forma de tipar lo que nos llega cuando mandamos recibimos una funcion que nosotros hicimos
//en este caso recibimos dos funciones diferentes en un mismo selector 
//los tipamos con el type y para no ser redundantes utilizamos el '|'
//para poder diferenciarlos nos ayudamos del type 
type Props =
  | {
      type: "from";
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | { type: "to"; value: Language; onChange: (language: Language) => void };

export const LanguageSelector = ({ onChange, type, value }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };
  return (
    <Form.Select
      aria-label="Selecciona un idioma"
      onChange={handleChange}
      value={value}
    >
      {type === "from" && (
        <option value={AUTO_LANGUAGE}>Detectar idioma</option>
      )}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
};
