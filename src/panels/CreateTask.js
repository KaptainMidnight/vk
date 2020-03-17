import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, FormLayout, Input, Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";

const CreateTask = props => {

  const [task, setTask] = useState('');

  const changeTaskHandler = event => {
    setTask(event.target.value);
  };

  return (
      <Panel id={props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to={"tasks"} />}>
          Создание задачи
        </PanelHeader>
        <FormLayout>
          <Input
            type={"text"}
            name={"task"}
            top={"Название задачи"}
            value={task}
            onChange={changeTaskHandler}
          />
          <Button size={"xl"} onClick={props.go} data-to={'tasks'}>
            Создать задачу
          </Button>
        </FormLayout>
      </Panel>
  )
};

CreateTask.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};


export default CreateTask
