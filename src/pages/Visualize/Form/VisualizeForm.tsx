import { Input } from '@codegouvfr/react-dsfr/Input'
import { Button } from '@codegouvfr/react-dsfr/Button'
import { Grid } from 'components/Grid'
import { SelectNomenclatures } from './SelectNomenclatures'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from '@tanstack/react-router'
import { encodeParams } from './encodeParams'
import { Container } from 'components/Container'
import { useEffect } from 'react'

export type FormInputs = {
  source: string
  metadata: string
  data: string
  nomenclature: { name: string; uri: string }[]
}

export function VisualizeForm() {
  const navigate = useNavigate()
  const methods = useForm<FormInputs>({
    defaultValues: {
      nomenclature: [{ name: '', uri: '' }],
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit = handleSubmit((data) => {
    navigate({
      search: encodeParams(data),
    })
  })

  useEffect(() => {
    // Reset the scroll on component unmount
    return () => {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <Container>
      <Grid>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <h1>Prévisualisation d'enquête.</h1>
            <h2>Fichier source de l'enquête.</h2>
            <Input
              nativeInputProps={{
                ...register('source', {
                  required:
                    'Vous devez au moins fournir un URI de fichier source',
                }),
              }}
              hintText="une url valide"
              label="Uri Source."
              state={errors.source ? 'error' : 'default'}
              stateRelatedMessage={errors.source?.message}
            />
            <h2>Fichier de métadonnées de l'enquête.</h2>
            <Input
              nativeInputProps={{ ...register('metadata') }}
              label="Uri metadata"
              hintText="une url valide"
              state="default"
              stateRelatedMessage="Text de validation / d'explication de l'erreur"
            />
            <h2>Fichier de données de l'enquête.</h2>
            <Input
              nativeInputProps={{ ...register('data') }}
              hintText="une url valide"
              label="Uri Data."
              state="default"
              stateRelatedMessage="Text de validation / d'explication de l'erreur"
            />
            <SelectNomenclatures />
            <Button type="submit">Visualiser le questionnaire</Button>
          </form>
        </FormProvider>
      </Grid>
    </Container>
  )
}
