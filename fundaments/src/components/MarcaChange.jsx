
function MarcaChange({ mar }) {
    return (
        <div>
            <h3>Marca selecionada:</h3>
            <p style={{ fontWeight: 'bold' }}>{mar || 'Nenhuma marca selecionada ainda'}</p>
        </div>
    )
}

export default MarcaChange