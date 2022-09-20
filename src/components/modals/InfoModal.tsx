import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="So funktioniert's:"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Errate das Wörtchen des Tages in 6 Versuchen. Nach jedem Versuch wird
        mit Farben angezeigt, wie nah dein Wort der Lösung war:
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="A" isCompleted={true} />
        <Cell value="L" isCompleted={true} />
        <Cell value="L" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="E"
          status="correct"
        />
        <Cell value="S" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Das E kommt im Wort an der richtigen Stelle vor.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          value="L"
          isRevealing={true}
          isCompleted={true}
          status="present"
        />
        <Cell value="A" isCompleted={true} />
        <Cell value="U" isCompleted={true} />
        <Cell value="C" isCompleted={true} />
        <Cell value="H" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Das L kommt im Wort vor, jedoch an anderer Stelle.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="O" isCompleted={true} />
        <Cell value="T" isCompleted={true} />
        <Cell value="T" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="S" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Das S kommt nicht im Wort vor.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Jeden Tag um Mitternacht wird ein neues Wörtchen freigeschaltet.
      </p>
    </BaseModal>
  )
}
