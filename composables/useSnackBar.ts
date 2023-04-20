import { ref } from 'vue'

export type SnackBarType = 'success' | 'error' | 'info'

export interface Message {
  message: string,
  type: SnackBarType
}

class SnackBar {
  private _messages: Message[] = []
  private _isOpenSnackBar = ref(false)
  private _current = ref<Message>({ message: '', type: 'info' })

  push (message: Message) {
    this._messages.push(message)
    this._current.value = message
    this._isOpenSnackBar.value = true
  }

  pop (): Message | undefined {
    const m = this._messages.pop()
    this._isOpenSnackBar.value = false
    return m
  }

  get current () {
    return this._current
  }

  get isOpenSnackBar (): Ref<boolean> {
    return this._isOpenSnackBar
  }
}

const globalSnackBar = new SnackBar()

export const useSnackBar = () => {
  return {
    // SnackBarインスタンスはグローバルオブジェクトなのでreturnでnewする
    snackbar: globalSnackBar
  }
}
