import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listContact } from '../store/actions/contactActions'
import { Form, Button, Container, Col, Row, Card } from 'react-bootstrap'


export default function Contact() {

  const { contacts, loading, error } = useSelector(
    state => state.contactListReducer
  )
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listContact())
  })

  return (
    <div>
      <h1>ini halaman contact / home</h1>
    </div>
  )
}
