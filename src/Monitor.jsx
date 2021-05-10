import React, { useState, useRef } from "react";
import data from "./data";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

export function Monitor() {
  const [questions, setQuestions] = useState(data);
  const [questionNumber, setQuestionNumber] = useState(1);
  const question = questions.find((question) => question.id === questionNumber);
  const refContainer = useRef(null);
  const countdown = () => {
    console.log(refContainer.current.innerHTML);
    let second = refContainer.current.innerHTML;
    // second.style.color = "white";
    const count = 0;

    const timerID = setInterval(function () {
      if (second === count) {
        console.log("finish");
        clearInterval(timerID);
        ringTimeUp();
        ringAnswerCheck();
      } else {
        console.log("not yet")
        second--;
        console.log(second)
      }
    }, 1000);
  };

  return (
    <main>
      <Container className="container">
        <div className="question-box">
          <p className="question-text">{question.question}</p>
          <span id="count-down" ref={refContainer}>
            10
          </span>
          <button onClick={() => countdown()}>Check</button>
        </div>
        <Row className="row">
          <Col className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet red">
                  <span className="character">A</span>
                </p>
              </div>
              <p className="choice">{question.choices.A}</p>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet blue">
                  <span className="character">B</span>
                </p>
              </div>
              <p className="choice">{question.choices.B}</p>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet yellow">
                  <span className="character">C</span>
                </p>
              </div>
              <p className="choice">{question.choices.C}</p>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet green">
                  <span className="character">D</span>
                </p>
              </div>
              <p className="choice">{question.choices.D}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export function ringTimeUp() {
  console.log("Time's Up");
}

export function ringAnswerCheck() {
  console.log("Answer Check");
}

export default Monitor;
