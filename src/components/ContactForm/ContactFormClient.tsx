'use client'

import { useForm } from 'react-hook-form'
import { Button } from '../common/Button'
import { useCallback, useMemo } from 'react'
import { Doctor } from '@/types/sanity'

interface FormData {
	name: string
	email: string
	doctor: string
	subject: string
}

interface ContactFormClientProps {
	doctors: Doctor[]
	mailTo: string
}

export const ContactFormClient = ({ doctors, mailTo }: ContactFormClientProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormData>()

	const DOCTORS_OPTIONS = useMemo(() => {
		return doctors.map((doctor) => ({
			value: doctor._id,
			label: doctor.name
		}))
	}, [doctors])

	const onSubmit = useCallback(
		(data: FormData) => {
			// we need to prepare a message that will be sent via default email client
			const message = `Imię i nazwisko: ${data.name}
Adres e-mail: ${data.email}
Wybierz lekarza: ${data.doctor}
Temat wiadomości: ${data.subject}`

			window.location.href = `mailto:${mailTo}?subject=Wiadomość z formularza kontaktowego&body=${encodeURIComponent(message)}`
			// clear form
			reset()
		},
		[mailTo, reset]
	)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-full'>
			<div className='flex flex-col sm:flex-row gap-4 mb-4'>
				<div className='flex-1'>
					<input
						type='text'
						placeholder='Imię i nazwisko'
						className='w-full py-2 border-b-[1px] border-light-pink border-0  focus:outline-none focus:ring-2 focus:ring-blue-500'
						{...register('name', { required: 'To pole jest wymagane' })}
					/>
					{errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
				</div>
				<div className='flex-1'>
					<input
						type='email'
						placeholder='Adres e-mail'
						className='w-full  py-2 border-b-[1px] border-light-pink border-0  focus:outline-none focus:ring-2 focus:ring-blue-500'
						{...register('email', {
							required: 'To pole jest wymagane',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Nieprawidłowy adres e-mail'
							}
						})}
					/>
					{errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
				</div>
			</div>

			<div className='mb-4'>
				<select
					className='w-full py-2 border-b-[1px] border-light-pink border-0 focus:outline-none focus:ring-2 focus:ring-blue-500'
					style={{
						textIndent: '0'
					}}
					{...register('doctor', { required: 'To pole jest wymagane' })}
				>
					<option value='' disabled>
						Wybierz lekarza
					</option>
					{DOCTORS_OPTIONS.map((doctor) => (
						<option key={doctor.value} value={doctor.value}>
							{doctor.label}
						</option>
					))}
				</select>
				{errors.doctor && <p className='text-red-500 text-sm mt-1'>{errors.doctor.message}</p>}
			</div>

			<div className='mb-4'>
				<textarea
					placeholder='Temat wiadomości'
					className='resize-none w-full  py-2 border-b-[1px] border-light-pink border-0  focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]'
					{...register('subject', { required: 'To pole jest wymagane' })}
				/>
				{errors.subject && <p className='text-red-500 text-sm mt-1'>{errors.subject.message}</p>}
			</div>

			<Button type='submit' variant='lightPink' className='w-full mt-8'>
				Wyślij
			</Button>
		</form>
	)
}
