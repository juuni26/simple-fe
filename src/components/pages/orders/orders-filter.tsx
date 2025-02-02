import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'

export type OrderFilter = {
  customerId?: string
  employeeId?: number
  orderDateFrom?: string
  orderDateTo?: string
  shippedDateFrom?: string
  shippedDateTo?: string
  shipName?: string
  shipCity?: string
  shipVia?: number
  shipCountry?: string
  freight?: number
}

const filterSchema = z.object({
  customerId: z.string().optional(),
  employeeId: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : undefined)),
  orderDateFrom: z.string().optional(),
  orderDateTo: z.string().optional(),
  shippedDateFrom: z.string().optional(),
  shippedDateTo: z.string().optional(),
  shipName: z.string().optional(),
  shipCity: z.string().optional(),
  shipCountry: z.string().optional(),
  shipVia: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : undefined)),
  freight: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : undefined)),
})

type FilterFormProps = {
  onSubmit: (data: OrderFilter) => void
  onReset: () => void
  defaultValues: OrderFilter
}

export function OrdersFilter({
  onSubmit,
  onReset,
  defaultValues,
}: FilterFormProps) {
  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues,
  })

  // console.log(defaultValues, 's')
  console.log(form.getValues(), 's')
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="customerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer ID</FormLabel>
                <FormControl>
                  <Input placeholder="Customer ID" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="orderDateFrom"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order Date From</FormLabel>
                <FormControl>
                  <Input type="date" {...field} value={field.value || ''} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="orderDateTo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order Date To</FormLabel>
                <FormControl>
                  <Input type="date" {...field} value={field.value || ''} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="shipName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ship Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ship Name"
                    {...field}
                    value={field.value || ''}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shipVia"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ship Via</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ship Via"
                    {...field}
                    type="number"
                    value={field.value || ''}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="freight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Freight</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Freight"
                    {...field}
                    inputMode="numeric"
                    value={field.value || ''}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="shipCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ship City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ship City"
                    {...field}
                    value={field.value || ''}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="shipCountry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ship Country</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ship Country"
                    {...field}
                    value={field.value || ''}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              form.reset()
              onReset()
            }}
          >
            Reset
          </Button>
          <Button type="submit">Apply Filters</Button>
        </div>
      </form>
    </Form>
  )
}
