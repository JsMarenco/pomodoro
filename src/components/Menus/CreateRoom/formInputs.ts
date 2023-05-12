import { InputInterface } from '@/ts/interfaces/inputs'

const baseProps: Pick<InputInterface, 'fullwidth' | 'autocomplete'> = {
  autocomplete: 'off',
  fullwidth: true,
}

export const roomNameInput: InputInterface = {
  id: 'room-name',
  name: 'name',
  placeholder: 'Enter the room name',
  role: 'textbox',
  type: 'text',
  ...baseProps,
}

export const roomDescriptionInput: InputInterface = {
  id: 'room-description',
  name: 'description',
  placeholder: 'Enter the room description',
  role: 'textbox',
  type: 'text',
  ...baseProps,
}

const roomInputs: InputInterface[] = [roomNameInput, roomDescriptionInput]

export default roomInputs
