import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Row, Col, Container, Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowIcon } from "./components/icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { TextArea } from "./components/TextArea";
function App() {
  const {
    fromLanguage,
    toLanguage,
    setToLanguage,
    interchangeLanguage,
    setFromLanguage,
    fromText,
    result,
    loading,
    setFromText,
    setResult
  } = useStore();
  return (
    <>
      <Container>
        <h1>google translate</h1>
        <Row>
          <Col xs="auto">
            <Stack gap={2}>
              <LanguageSelector
                type="from"
                value={fromLanguage}
                onChange={setFromLanguage}
              ></LanguageSelector>
              <TextArea
                loading={loading}
                type="from"
                value={fromText}
                onchage={setFromText}
              ></TextArea>
            </Stack>
          </Col>
          <Col>
            <Button
              variant="link"
              disabled={fromLanguage === AUTO_LANGUAGE}
              onClick={interchangeLanguage}
            >
              <ArrowIcon />
            </Button>
          </Col>
          <Col xs="auto">
            <Stack gap={2}>
              <LanguageSelector
                type="to"
                value={toLanguage}
                onChange={setToLanguage}
              ></LanguageSelector>
              <TextArea
                loading={loading}
                type="to"
                value={result}
                onchage={setResult}
              ></TextArea>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
