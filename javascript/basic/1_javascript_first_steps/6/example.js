
function showHide() {
  const element = (
    <>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={e => setShowChild(e.target.checked)}
        />{' '}
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 30,
          width: 30,
          border: 'solid',
        }}
      >
        {showChild ? showChild : null}
      </div>
      <button type="submit">Submit</button>
    </>
  )
  
}