import { useState } from "react"
import './ModalAddMarkerSection.css'

export default function ModalAddMakerSection() {
    const [dataForm, setDataForm] = useState({
        textTitle: '',
        textDescription: ''
    })

    return (
        <section className="modal-marker-contaienr">
            <form>
                <label htmlFor="title">Заголовок</label>
                <input
                    type='text'
                    name="title"
                    id="title"
                    value={dataForm.textTitle}
                    onChange={(evt => setDataForm(props => {
                        return { ...props, textTitle: evt.target.value }
                    }))} />

                <label htmlFor="description">Заголовок</label>
                <input type='text'
                    name="description"
                    id="description"
                    value={dataForm.textDescription}
                    onChange={(evt => setDataForm(props => {
                        return { ...props, textDescription: evt.target.value }
                    }))} />

                <button type='submit'>Создать маркер</button>
            </form>
        </section>
    )
}